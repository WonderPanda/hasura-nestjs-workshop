import { Injectable } from '@nestjs/common';
import { gql } from 'graphql-request';
import { GqlSdk, InjectSdk } from '../sdk/sdk.module';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

gql`
  mutation createUser($input: users_insert_input!) {
    insert_users_one(object: $input) {
      id
    }
  }

  query findUserByEmail($email: citext!) {
    users(where: { email: { _eq: $email } }) {
      id
      password_hash
    }
  }
`;

export interface LoginUserArgs {
  email: string;
  password: string;
}

export interface RegisterUserArgs {
  email: string;
  displayName?: string;
  password: string;
}

export interface LoginOrRegisterUserOutput {
  token?: string;
  error?: string;
}

export type HasuraJwtClaims<
  CustomClaims extends Record<string, string | string[]> = {},
> = {
  'https://hasura.io/jwt/claims': {
    'x-hasura-default-role': string;
    'x-hasura-allowed-roles': string[];
  } & CustomClaims;
};

export type UserJwtClaims = HasuraJwtClaims<{ 'x-hasura-user-id': string }>;

@Injectable()
export class AuthService {
  constructor(
    @InjectSdk() private readonly sdk: GqlSdk,
    private readonly jwtService: JwtService,
  ) {}

  public async login(args: LoginUserArgs): Promise<LoginOrRegisterUserOutput> {
    const { email, password } = args;
    const { users } = await this.sdk.findUserByEmail({
      email,
    });

    const foundUser = users?.[0];

    if (!foundUser) {
      return {
        error: `Could not find user for email ${email}`,
      };
    }

    const passwordMatch = await bcrypt.compare(
      password,
      foundUser.password_hash,
    );

    if (!passwordMatch) {
      return {
        error: 'Email and password do not match',
      };
    }

    const token = await this.signHasuraToken(foundUser.id);

    return {
      token,
    };
  }

  public async registerUser(
    args: RegisterUserArgs,
  ): Promise<LoginOrRegisterUserOutput> {
    const {
      email,
      password,
      displayName = 'Apparently, this user prefers to keep an air of mystery about them',
    } = args;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const { insert_users_one: user } = await this.sdk.createUser({
        input: {
          email,
          password_hash: hashedPassword,
          display_name: displayName,
        },
      });

      const { id } = user;

      const token = await this.signHasuraToken(id);

      return {
        token,
      };
    } catch (e) {
      const error = (e?.message as string)?.includes(
        'unique constraint "users_email_key"',
      )
        ? 'That email address is already registered'
        : 'Something unexpected happened. Please try again later';

      return {
        error,
      };
    }
  }

  private signHasuraToken(userId: number) {
    const payload: UserJwtClaims = {
      'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': ['user'],
        'x-hasura-default-role': 'user',
        'x-hasura-user-id': String(userId),
      },
    };

    return this.jwtService.signAsync(payload);
  }
}
