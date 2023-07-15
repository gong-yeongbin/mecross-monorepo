import express, { Express } from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan';

import indexRouter from './src/routes';

const app: Express = express();

// 세션 설정
const sessionMiddleware: express.RequestHandler = session({
  name: 'sessionID',
  resave: false,
  saveUninitialized: false,
  secret: `${process.env.COOKIE_SECRET}`,
  cookie: {
    httpOnly: true,
    secure: false,
  },
});

// express 미들웨어 설정
// cors 설정
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// http security
app.use(helmet.hidePoweredBy(), helmet.noSniff());

// request 로그를 기록하는 미들웨어
app.use(logger('dev'));

// request 본문을 분석해주는 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// request 의 쿠키를 해석해주는 미들웨어
app.use(cookieParser());
app.use(sessionMiddleware);

app.use('/', indexRouter);

export default app;
