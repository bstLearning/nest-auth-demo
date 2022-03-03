import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    // req.user is from LocalStrategy.validate method from auth/loca-strategy.ts
    return {... req.user, msg: 'Logged in!'}; 
  }

  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getHello(@Request() req): string {
    // return this.appService.getHello();
    return {...req.user, msg: 'you can see this page because of cookie and session. Or you would see 403 Forbidden resource.'}
  }
}
