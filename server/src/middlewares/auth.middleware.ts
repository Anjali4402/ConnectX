import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError.js";
import jwt, { JwtPayload } from "jsonwebtoken";
import userModel from "../models/user.model.js";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Get the token from the cookies
  const token = req.cookies.token;

  // Throw error if token is not available
  if (!token) {
    throw new AppError("Access denied. Token missing.", 401);
  }

  // Decode the token.
  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

  // if token not match
  if (!decoded) {
    throw new AppError("User not found!", 401);
  }

  // GET user
  const user = await userModel.findById(decoded?.userId);
  if (!user) {
    throw new AppError("User not found.", 401);
  }

  // set user data in the request
  req.user = user;

  next();
};

export { authMiddleware };
