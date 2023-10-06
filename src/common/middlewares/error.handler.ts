import { Express, NextFunction, Request, Response } from 'express';
import logger from '../utils/logger.util';
import { CustomException } from '../exceptions';
import { messageUtil } from '../utils/messages.util';

export class ErrorHandler {
  constructor(app: Express) {
    app.use(this.errorLoggerHttp);
    app.use(this.errorResponderHttp);
  }

  errorLoggerHttp = (
    error: Error & Partial<CustomException>,
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    if (!(error instanceof CustomException)) {
      logger.error(error, 'Server error');
      return next(error);
    }
    logger.error(
      {
        action: `Method:: ${req.method} URL:: ${req.url}`,
        status: error.status,
        body: {
          ...req.body,
        },
        error,
      },
      error.message,
    );
    return next(error);
  };

  errorResponderHttp = (
    error: Error & Partial<CustomException>,
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    if (!(error instanceof CustomException))
      return res.status(500).json({ message: messageUtil.exceptions.internal });
    return res.status(error.status).json({
      message: error.message,
      errors: error.errors,
      success: false,
    });
  };
}
