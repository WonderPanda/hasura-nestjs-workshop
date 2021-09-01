import { Body, Controller, Post } from '@nestjs/common';
import { AuthService, RegisterUserArgs } from './auth.service';

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

  @Post('/register')
  async register(
    @Body() payload: HasuraActionsPayload<{ params: RegisterUserArgs }>,
  ) {
    const { input } = payload;

    return this.authService.registerUser(input.params);
  }
}
