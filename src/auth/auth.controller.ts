import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService, LoginUserArgs, RegisterUserArgs } from './auth.service';
import { JwtAuthGuard } from './jwt.guard';

interface HasuraActionsPayload<Input extends {} = {}, Session extends {} = {}> {
  action: {
    name: string;
  };
  input: Input;
  session_variables: Session;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(
    @Body() payload: HasuraActionsPayload<{ params: LoginUserArgs }>,
  ) {
    const { input } = payload;

    return this.authService.login(input.params);
  }

  @Post('/register')
  async register(
    @Body() payload: HasuraActionsPayload<{ params: RegisterUserArgs }>,
  ) {
    const { input } = payload;

    return this.authService.registerUser(input.params);
  }
}
