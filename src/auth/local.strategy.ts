import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authServe: AuthService) {
    super(); //config if strategy need
  }

  // equivalent to Verify Callback from passport.js 
  async validate(username: string, password: string): Promise<any> {
    const user = await this.authServe.validateUser(username, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
