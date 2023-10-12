import { constants } from 'http2';
import { CustomException } from './custom.exception';

export class ValidationException extends CustomException {
  constructor(message: string, errors?) {
    super(constants.HTTP_STATUS_UNPROCESSABLE_ENTITY, message, errors);
  }
}
