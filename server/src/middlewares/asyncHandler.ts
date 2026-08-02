import { NextFunction, Request, Response } from "express";

const asyncHandler =
  (passedFunc: Function) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await passedFunc(req, res, next);
    } catch (error) {
      next(error);
    }
  };

export default asyncHandler;
