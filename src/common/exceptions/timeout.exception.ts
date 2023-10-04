import { CustomException } from './custom.exception';
import { constants } from 'http2';

export class TimeoutException extends CustomException {
  constructor(message: string, errors?) {
    super(constants.HTTP_STATUS_REQUEST_TIMEOUT, message, errors);
  }
}
