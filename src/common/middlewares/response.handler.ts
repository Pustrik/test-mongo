import { Express } from 'express';

export class ResponseHandler {
  constructor(app: Express) {
    app.use(this.responseInterceptor);
  }

  responseInterceptor = (req, res, next) => {
    const originalJson = res.json;

    res.json = function (data) {
      if (!('success' in data)) data.success = true;

      originalJson.call(this, data);
    };
    next();
  };
}
