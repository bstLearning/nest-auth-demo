<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="160" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

Learn nest.js authentication: JWTs, Sessions and login, following crash course [here](https://www.youtube.com/watch?v=_L225zpUK0M&list=PLlaDAvA2MhR2jb8zavu6I-w1BA878aHcB&index=5&ab_channel=MariusEspejo)

## Usage

### 🎈 Main branch
session based approch: POST http://localhost:3000/login to recieve cookie session ID, and then GET http://localhost:3000/protected with that session ID so as to access to the protected page.

### 🎈 JWT branch
JWT based approch: POST http://localhost:3000/login to recieve jwt token, and then GET http://localhost:3000/protected with jwt token set as Bear token in http request header so as to access to the protected page.

## Logic behind
### 🎈 Main branch

  ```ts
  /* app.controller.ts */
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

  ```
- login page

  client req → app.controller.ts `@UseGuards(LocalAuthGuard)` → trigger local strategy → local strategy run constructor function and validate method → validate method return user, which would be saved in client req.user by passport.js → finally get down to app.controller.ts `login(@Request() req) {}` Route Handler.

  If session setup, that req.user would be passed to `session.serializer.ts`, where you define what go into session storage → finally get down to app.controller.ts `login(@Request() req) {}` Route Handler → auto retrun cookie of sid

- protected page

  client req → browser would birng that cookie → app.controller.ts `@UseGuards(AuthenticatedGuared)` → check sid → if is authrenticated, gets to `getHello(@Reqest() req)` Route handler.


### 🎈 JWT branch

```ts
/* app.controller.ts */
 @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user); // return JWT
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string { //TODO: require an Bearer token, validate token
    return req.user 
  }
```
- login page

  client req → app.controller.ts `@UseGuards(LocalAuthGuard)` → trigger local strategy → local strategy run constructor function and validate method → validate method return user, which would be saved in client req.user by passport.js → finally get down to app.controller.ts `login(@Request() req) {}` Route Handler.

  Now this.autheService.login() return jwt → jwt response to client

- protected page

  client req → in browser provide that jwt token as Bearer Token in the Authroization Headers (like you do in Postman) → app.controller.ts `@UseGuards(JwtAuthGuard)` → go into `jwt.strategy.ts` → extract jwt token from reqeust and validate method return what you need from the decoded jwt payload, which is saved into req.user → finally get down to app.controller.ts `getHello(@Request() req) {}` Route Handler.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
