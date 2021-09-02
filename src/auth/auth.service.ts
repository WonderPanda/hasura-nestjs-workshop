import { Injectable } from '@nestjs/common';

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

@Injectable()
export class AuthService {
  constructor() {}

  public async login(args: LoginUserArgs): Promise<LoginOrRegisterUserOutput> {
    console.log(args);

    return {
      error: 'Not implemented',
    };
  }

  public async registerUser(
    args: RegisterUserArgs,
  ): Promise<LoginOrRegisterUserOutput> {
    console.log(args);

    return {
      error: 'Not implemented',
    };
  }
}
