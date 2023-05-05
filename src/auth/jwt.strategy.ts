import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { ExtractJwt } from 'passport-jwt'

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      // secret: '',
    })
  }

  async validate(payload: any) {
    return {
      id: payload.sub,
      name: payload.name
    }
  }
}