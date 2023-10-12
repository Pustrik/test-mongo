import { CustomException } from './custom.exception';
import { constants } from 'http2';

export class BadRequestException extends CustomException {
  constructor(message: string, errors?) {
    super(constants.HTTP_STATUS_BAD_REQUEST, message, errors);
  }
}
