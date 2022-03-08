import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

// for protected pages

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "SECRET" //protect this, move to env var
    });
  }

  async validate(payload: any) {
    // whatever you return would saved in req.user
    // tho named validate, the actucal validation already happen in contructor super()
    // as it go through strategy
    // strategy decode jwt and pass down to this validate method

    // maybe communicate w/ db ... await this.userService.getById(payload.sub) 
    // and decide what to return

    return {
      id: payload.sub,
      name: payload.name,
    }
  }
}
   