export default class HttpException extends Error {
  constructor (readonly status: number, readonly message: string) {
    super(message);
    this.status = status;
  }
}