import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserJwtClaims } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('DEV_JWT_SECRET'),
    });
  }

  async validate(payload: UserJwtClaims) {
    return {
      userId: parseInt(
        payload['https://hasura.io/jwt/claims']['x-hasura-user-id'],
      ),
    };
  }
}
