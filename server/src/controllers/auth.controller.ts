import { Request, Response } from "express";
import userModal from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { hashPassword } from "../utils/hashPassword.js";

interface RegisterBody {
  username: string;
  email: string;
  password: string;
  bio?: string;
  avatar?: string;
}

function loginController(req: Request, res: Response) {
  console.log(typeof req, typeof res);

  const { username, password } = req?.body;

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Incompleted Request",
    });
  }

  console.log("username and password ", username, password);

  // console.log("api run successfully");
  res.send({
    success: true,
    data: "Login api run successfully",
  });
}

async function registerController(req: Request, res: Response) {
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
    let token;
    try {
      token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
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
      // sameSite: "strict",
      // secure: true,
      // httpOnly: true,
      maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    });

    return res.status(201).json({
      success: true,
      data: user,
      message: "User Registered Successfully!",
    });
  } catch (error) {
    const firstError = Object.values(error.errors)[0];

    if (error.name === "ValidationError") {
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
