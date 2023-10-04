export abstract class CustomException extends Error {
  status: number;
  errors: Array<any>;

  constructor(status: number, message: string, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }
}
