import ExceptionService from '../services/exception.service';
import { Request, Response } from 'express';

export default class ExceptionController {
  constructor(private readonly exceptionService: ExceptionService) {}

  exceptionTest = (req: Request, res: Response) => {
    return this.exceptionService.testException();
  };
}
