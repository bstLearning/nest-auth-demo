import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";

@Injectable()
export class SessionSerializer extends PassportSerializer {
  
  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    
    // user args is what you got from LocalStrategy.validate() from local.staregy.ts

    // define what go into session storage
    done(null, user)
  }

  deserializeUser(payload: any, done: (err: Error, user: any) => void) {

    // NOTICE: could do sth like : const user = this.userService.findById(payload.id) ....
    
    // define waht go out of session storage
    done(null, payload)
  }
}