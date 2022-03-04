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
    return {... req.user, msg: 'Logged in!'}; // TODO: return JWT access token
  }

  @Get('protected')
  getHello(@Request() req): string { //TODO: require an Bearer token, validate token
    return req.user 
  }
}
