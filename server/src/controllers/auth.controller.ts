import { Request, Response } from "express";
import userModal from "../models/user.model.js";
import { comparePassword } from "../utils/comparePassword.js";
import mongoose from "mongoose";
import AppError from "../errors/AppError.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import { generateAccessToken } from "../utils/jwt.js";
import { clearAuthCookie, setAuthCookie } from "../utils/cookies.js";

interface RegisterBody {
  username: string;
  email: string;
  password: string;
  bio?: string;
  avatar?: string;
}

interface LoginBody {
  usernameOrEmail: string;
  password: string;
}

const loginController = asyncHandler(
  async (req: Request<{}, {}, LoginBody>, res: Response) => {
    const { usernameOrEmail, password } = req.body;

    // find by username or email
    const user = await userModal
      .findOne({
        $or: [{ email: usernameOrEmail }, { username: usernameOrEmail }],
      })
      .select("+password");

    // if user is not exist
    if (!user) {
      // throw new AppError("User not exist", 401);
      throw new AppError("Invalid username or password", 401);
    }

    // compare and verify the password.
    const isValidPassword = await comparePassword(password, user.password);

    if (!isValidPassword) {
      throw new AppError("Invalid username or password", 401);
    }

    // Generate new JWT token
    const token = generateAccessToken(user.id);

    // send token in cookies

    setAuthCookie(res, token);

    return res.status(201).json({
      success: true,
      data: null,
      message: "User Login Successfully!",
    });
  },
);

const registerController = asyncHandler(
  async (req: Request<{}, {}, RegisterBody>, res: Response) => {
    // Destructuring request data.
    const { username, email, password } = req.body;

    // Check weather user already exist or not. (based on email and username)
    const existingUser = await userModal.findOne({
      $or: [{ email }, { username }],
    });

    // If user already exist then return the message.
    if (existingUser) {
      throw new AppError(
        existingUser.email === email
          ? "Email is already registered."
          : "Username is already taken.",
        409,
      );
    }

    // Create User
    const user = await userModal.create({
      username,
      email,
      password,
    });

    /// JWt added
    const token = generateAccessToken(user._id.toString());

    setAuthCookie(res, token);

    return res.status(201).json({
      success: true,
      data: {
        username,
        email,
      },
      message: "User Registered Successfully!",
    });
  },
);

const logoutController = asyncHandler(
  async (req: Request<{}, {}, RegisterBody>, res: Response) => {
    // Currently just clearing the cookies
    clearAuthCookie(res);

    res.status(201).json({
      success: true,
      message: "User logout successfully!",
      data: null,
    });
  },
);

export { loginController, registerController, logoutController };
