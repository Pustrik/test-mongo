import { CustomException } from './custom.exception';
import { constants } from 'http2';

export class InternalException extends CustomException {
  constructor(message: string, errors?) {
    super(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR, message, errors);
  }
}
