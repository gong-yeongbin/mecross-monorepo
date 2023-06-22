import express, { Express, Request, Response } from 'express';
// import session from 'express-session';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';
// import helmet from 'helmet';
// import logger from 'morgan';
//
// import config from './configs';
// import indexRouter from './routes/index';

const app: Express = express();
// const port: number = config.port;

// 세션 설정
// const sessionMiddleware: express.RequestHandler = session({
//   name: 'sessionID',
//   resave: false,
//   saveUninitialized: false,
//   secret: `${process.env.COOKIE_SECRET}`,
//   cookie: {
//     httpOnly: true,
//     secure: false,
//   },
// });

// express 서버 포트 지정
app.set('port', process.env.PORT || 3000);

// express 미들웨어 설정
// cors 설정
// app.use(
//   cors({
//     origin: true,
//     credentials: true,
//   })
// );

// http security
// app.use(helmet.frameguard());
// app.use(helmet.hidePoweredBy());
// app.use(helmet.noSniff());

// request 로그를 기록하는 미들웨어
// app.use(logger('dev'));

// request 본문을 분석해주는 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// request 의 쿠키를 해석해주는 미들웨어
// app.use(cookieParser());
// app.use(sessionMiddleware);

// app.use('/', indexRouter);
app.use('/', (req: Request, res: Response) => {
  res.send('hello world!!!');
});

app.listen(3000, () => {
  console.log(`[server]: Server is running at <http://localhost:${3000}>`);
});
