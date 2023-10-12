import { ForbiddenException } from '../exceptions';
import { messageUtil } from '../utils/messages.util';

export default class ExceptionService {
  constructor() {}

  testException = () => {
    throw new ForbiddenException(messageUtil.exceptions.access);
  };
}
