import { Request, Response } from 'express';
import { constants } from 'http2';
import AppService from '../services/app.service';

export default class AppController {
  constructor(private readonly appService: AppService) {}

  healthCheck = (req: Request, res: Response) => {
    return res
      .status(constants.HTTP_STATUS_OK)
      .json(this.appService.healthCheck());
  };

  favicon = (req: Request, res: Response) => {
    return res.status(constants.HTTP_STATUS_OK).json(this.appService.favicon());
  };
}
