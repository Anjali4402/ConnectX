class AppError extends Error {
  statusCode: number;
  success: boolean;

  constructor(message: string, statusCode: number) {
    super(message);

    this.name = "AppError";
    this.statusCode = statusCode;
    this.success = false;

    Object.setPrototypeOf(this, AppError.prototype);

    Error.captureStackTrace(this, AppError);
  }
}

export default AppError;
