import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // for session. from express-session docs
  /**
   *  NOTICE:
   *    DO NOT use in production env. the package purposely use an in-memory session store for dev
   *    Ref more on docs or here: https://stackoverflow.com/a/48485610/16124226
   */
  app.use(
    session({
      secret: 'keyboard cat', // session secret should pu in env vars
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 3600000 },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000);
}
bootstrap();
