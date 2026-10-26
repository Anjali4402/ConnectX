import mongoose, { Document, Schema, Types } from "mongoose";
import bcrypt from "bcrypt";

interface AvatarType {
  public_id: string;
  url: string;
}

export interface UserModelType extends Document {
  _id: Types.ObjectId;

  name: string;
  username: string;
  email: string;
  password: string;

  avatar?: AvatarType;
  bio?: string;

  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<UserModelType>(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },

    username: {
      type: String,
      required: [true, "Username is required."],
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required."],
      minlength: [6, "Password should contain at least 6 characters."],
      select: false,
    },

    avatar: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },

    bio: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_, ret: Record<string, unknown>) => {
        delete ret.password;
        return ret;
      },
    },
  },
);

// Hash password before saving
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
});

const userModel = mongoose.model<UserModelType>("User", userSchema);

export default userModel;
