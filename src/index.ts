import express from 'express';
import swaggerDocs from './swagger/swagger';
import dotenv from 'dotenv';
import logger from './common/utils/logger.util';
import StartApp from './app';
import {
  ErrorHandler,
  RequestLogger,
  ResponseHandler,
} from './common/middlewares';
import SupportHandler from './common/middlewares/support.handler';
import appRouter from './routes';

dotenv.config();

const bootstrap = () => {
  const { API_PORT, API_HOST } = process.env;
  const app = express();

  new SupportHandler(app);
  new ResponseHandler(app);
  new RequestLogger(app);
  new StartApp(app, appRouter);
  new ErrorHandler(app);

  app.listen(API_PORT, () => {
    logger.info(`Server is running at ${API_HOST}${API_PORT}`);
    swaggerDocs(app, API_HOST, API_PORT);
  });
};

bootstrap();
