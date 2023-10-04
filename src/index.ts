import express from 'express';
import '@shopify/shopify-api/adapters/node';
import swaggerDocs from './swagger/swagger';
import dotenv from 'dotenv';
import logger from './common/utils/logger.util';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import StartApp from './app';
import {
  ErrorHandler,
  RequestLogger,
  ResponseHandler,
} from './common/middlewares';
import appRouter from './common/routers/app.router';
import exceptionRouter from './common/routers/exception.router';
dotenv.config();

async function bootstrap() {
  const { API_PORT, API_HOST } = process.env;
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(
    cors({
      credentials: true,
      origin: process.env.ORIGIN,
    }),
  );
  app.use(cookieParser());

  new ResponseHandler(app);
  new RequestLogger(app);
  new StartApp(app, appRouter, exceptionRouter);
  new ErrorHandler(app);

  app.listen(API_PORT, () => {
    logger.info(`Server is running at ${API_HOST}:${API_PORT}`);
    swaggerDocs(app, API_HOST, API_PORT);
  });
}
bootstrap();
