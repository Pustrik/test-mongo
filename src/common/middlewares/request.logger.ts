import { Express, NextFunction, Request, Response } from 'express';
import logger from '../utils/logger.util';
export class RequestLogger {
  constructor(app: Express) {
    app.use(this.requestLogger);
  }

  private requestLogger = (req: Request, res: Response, next: NextFunction) => {
    logger.info(`Method:: ${req.method} url:: ${req.url}`);
    logger.info(`Body:: ${JSON.stringify(req.body)}`);
    next();
  };
}
