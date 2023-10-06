import { Request, Response } from 'express';
import { constants } from 'http2';
import HealthService from '../services/health.service';

export default class HealthController {
  constructor(private readonly appService: HealthService) {}

  healthCheck = (req: Request, res: Response) => {
    return res
      .status(constants.HTTP_STATUS_OK)
      .json(this.appService.healthCheck());
  };

  favicon = (req: Request, res: Response) => {
    return res.status(constants.HTTP_STATUS_OK).json(this.appService.favicon());
  };
}
