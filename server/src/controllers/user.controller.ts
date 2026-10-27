import { Request, Response } from "express";
import asyncHandler from "../middlewares/asyncHandler.js";
import userModel from "../models/user.model.js";

interface RegisterBody {
  username: string;
  email: string;
  password: string;
  bio?: string;
  avatar?: string;
}

const profileController = async (req: Request, res: Response) => {
  const user = await userModel.findById(req.user);

  return res.status(200).json({
    success: true,
    data: user,
    message: "Profile data get successfully!",
  });
};

// const updateProfileController = asyncHandler(
//   async (req: Request<{}, {}, RegisterBody>, res: Response) => {
//     const { username, email, password, avatar,bio,} = req.body;

//     userModel.updateOne({
//       {email : req.user.email},
//       {$set : {avatar, bio} }
//     })

//   },
// );

export { profileController };
