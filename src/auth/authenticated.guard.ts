import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

// for session auth demo. not for jwt auth

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    return request.isAuthenticated(); // would come from passport.js automatically
  }
}
