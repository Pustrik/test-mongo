import { Express, NextFunction, Request, Response } from 'express';
import logger from '../utils/logger.util';
export class RequestLogger {
  constructor(app: Express) {
    app.use(this.requestLogger);
  }

  private requestLogger = (req: Request, res: Response, next: NextFunction) => {
    logger.info(
      {
        action: `Method:: ${req.method} URL:: ${req.url}`,
        query: req.query,
        params: req.params,
        body: req.body,
      },
      'Request::',
    );
    next();
  };
}
