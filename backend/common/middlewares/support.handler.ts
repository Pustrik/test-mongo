import { Express } from 'express';
import * as bodyParser from 'body-parser';
import { BadRequestException } from '../exceptions/bad.exception';
import { messageUtil } from '../utils/messages.util';
import cors from 'cors';
import cookieParser from 'cookie-parser';

export default class SupportHandler {
  constructor(app: Express) {
    app.use(this.urlencoded());
    app.use(this.json());
    app.use(this.cors());
    app.use(this.cookieParser());
  }

  urlencoded = () => {
    return bodyParser.urlencoded({
      extended: true,
      limit: '10mb',
      parameterLimit: 10000,
    });
  };

  json = () => {
    return bodyParser.json({
      limit: '10mb',
      verify: (req, res, buf) => {
        try {
          if (buf.length !== 0) JSON.parse(buf.toString());
        } catch (e) {
          throw new BadRequestException(
            messageUtil.exceptions.bad,
            'Broken JSON',
          );
        }
      },
    });
  };

  cors = () => {
    return cors({
      credentials: true,
      origin: process.env.ORIGIN,
    });
  };

  cookieParser = () => {
    return cookieParser();
  };
}
