import { Injectable } from '@nestjs/common';
import gql from 'graphql-tag';

gql`
  mutation registerUser($input: users_insert_input!) {
    insert_users_one(object: $input) {
      id
    }
  }
`;

export interface RegisterUserArgs {
  email: string;
}

export interface RegisterUserOutput {
  token?: string;
  error?: string;
}

@Injectable()
export class AuthService {
  public async registerUser(
    args: RegisterUserArgs,
  ): Promise<RegisterUserOutput> {
    const { email } = args;

    return {
      error: `Not implemented. Cannot register ${email}`,
    };
  }
}
