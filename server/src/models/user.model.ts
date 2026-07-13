import mongoose from "mongoose";

const mongoSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
      minlength: [6, "Password should contain atleast 6 character"],
    },
    avatar: {
      type: String,
    },
    bio: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const userModal = mongoose.model("users", mongoSchema);

export default userModal;
