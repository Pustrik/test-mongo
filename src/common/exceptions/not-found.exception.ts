import { CustomException } from './custom.exception';
import { constants } from 'http2';

export class NotFoundException extends CustomException {
  constructor(message: string, errors?) {
    super(constants.HTTP_STATUS_NOT_FOUND, message, errors);
  }
}
