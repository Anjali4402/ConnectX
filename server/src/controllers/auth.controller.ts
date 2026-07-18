import { Request, Response } from "express";
import userModal from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { hashPassword } from "../utils/hashPassword.js";
import { comparePassword } from "../utils/comparePassword.js";
import mongoose from "mongoose";

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

async function loginController(req: Request<{}, {}, LoginBody>, res: Response) {
  try {
    // get values from request
    const { usernameOrEmail, password } = req.body;

    // find by username or email
    const user = await userModal
      .findOne({
        $or: [{ email: usernameOrEmail }, { username: usernameOrEmail }],
      })
      .select("+password");

    // if user is not exist
    if (!user) {
      return res.status(401).json({
        success: false,
        data: null,
        message: "User not exist.",
      });
    }

    // compare and verify the password.
    const isValidPassword = await comparePassword(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        data: null,
        message: "Invalid password, please try again.",
      });
    }

    // Generate new JWT token
    const JWT_SECRET = process.env.JWT_SECRET;

    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }

    let token;
    try {
      token = await jwt.sign({ userId: user._id }, JWT_SECRET, {
        expiresIn: "3d",
      });
    } catch (error: unknown) {
      return res.status(500).json({
        success: false,
        data: null,
        message: "Failed to process the request",
      });
    }

    // send token in cookies

    res.cookie("token", token, {
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
      httpOnly: true,
      maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    });

    return res.status(201).json({
      success: true,
      data: null,
      message: "User Registered Successfully!",
    });
  } catch (error: unknown) {
    // if (error.name === "ValidationError") {
    if (error instanceof mongoose.Error.ValidationError) {
      const firstError = Object.values(error.errors)[0];

      return res.status(400).json({
        success: false,
        data: null,
        message: error.message.split(":")[0],
        error: firstError.message,
      });
    }
  }

  return res.status(500).json({
    success: false,
    data: null,
    message: "Internal server error",
  });
}

async function registerController(
  req: Request<{}, {}, RegisterBody>,
  res: Response,
) {
  try {
    // Destructuring request data.
    const { username, email, password, bio, avatar } = req.body;

    // Check weather user already exist or not. (based on email and username)
    const existingUser = await userModal.findOne({
      $or: [{ email }, { username }],
    });

    // If user already exist then return the message.
    if (existingUser) {
      return res.status(409).json({
        success: false,
        data: null,
        message:
          existingUser.email === email
            ? "Email is already registered."
            : "Username is already taken.",
      });
    }

    // hash user password
    let hashedPassword;
    try {
      hashedPassword = await hashPassword(password);
    } catch (error) {
      return res.status(500).json({
        success: false,
        data: null,
        message: "Failed to process the request",
      });
    }

    // Create User
    const user = await userModal.create({
      username,
      email,
      password: hashedPassword,
      bio,
      avatar,
    });

    /// JWt added

    const JWT_SECRET = process.env.JWT_SECRET;

    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }

    let token;
    try {
      token = await jwt.sign({ userId: user._id }, JWT_SECRET, {
        expiresIn: "3d",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        data: null,
        message: "Failed to process the request",
      });
    }

    // send jwt token in the cookies

    res.cookie("token", token, {
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
      httpOnly: true,
      maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    });

    return res.status(201).json({
      success: true,
      data: user,
      message: "User Registered Successfully!",
    });
  } catch (error: unknown) {
    if (error instanceof mongoose.Error.ValidationError) {
      const firstError = Object.values(error.errors)[0];

      return res.status(400).json({
        success: false,
        data: null,
        message: error.message.split(":")[0],
        error: firstError.message,
      });
    }
  }

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
}

export { loginController, registerController };
