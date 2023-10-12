import { CustomException } from './custom.exception';
import { constants } from 'http2';

export class ConflictException extends CustomException {
  constructor(message: string, errors?) {
    super(constants.HTTP_STATUS_CONFLICT, message, errors);
  }
}
