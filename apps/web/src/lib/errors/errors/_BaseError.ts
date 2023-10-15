export default class _BaseError extends Error {
  private errorMessage: string;
  private errorStatus: number;

  constructor(name: string, message: string, status: number) {
    super(message);
    this.name = name;
    this.errorMessage = message;
    this.errorStatus = status;
  }

  getError() {
    return {
      message: this.errorMessage,
      status: this.errorStatus
    };
  }
}
