<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="160" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

Learn nest.js authentication: JWTs, Sessions and login, following crash course [here](https://www.youtube.com/watch?v=_L225zpUK0M&list=PLlaDAvA2MhR2jb8zavu6I-w1BA878aHcB&index=5&ab_channel=MariusEspejo)

## Usage

session based approch: POST http://localhost:3000/login to recieve cookie session ID, and then GET http://localhost:3000/protected with that session ID so as to access to the protected page.

JWT based approch: tbd


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
