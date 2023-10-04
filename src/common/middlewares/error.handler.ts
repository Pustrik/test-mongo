import { Express, NextFunction, Request, Response } from 'express';
import logger from '../utils/logger.util';
import { CustomException } from '../exceptions';

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
    logger.error({
      message: 'Error Handler Http',
      action: `Method:: ${req.method} url:: ${req.url}`,
      body: {
        ...req.body,
        secretKey: undefined,
        publicKey: undefined,
      },
      error,
    });
    return next(error);
  };

  errorResponderHttp = (
    error: Error & Partial<CustomException>,
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    if (!(error instanceof CustomException))
      return res.status(500).json({ message: 'Internal server error' });
    return res.status(error.status).json({
      message: error.message,
      errors: error.errors,
      success: false,
    });
  };
}
