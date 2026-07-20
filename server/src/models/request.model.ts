import { Schema, model, Types, Document } from "mongoose";

export type RequestStatus = "pending" | "accepted" | "rejected" | "blocked";

export interface IRequest extends Document {
  sender: Types.ObjectId;

  receiver: Types.ObjectId;

  message?: string;

  status: RequestStatus;

  chatId?: Types.ObjectId;

  createdAt: Date;
  updatedAt: Date;
}

const RequestSchema = new Schema<IRequest>(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    receiver: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    message: {
      type: String,
      maxlength: 200,
    },

    status: {
      type: String,
      enum: ["pending", "accepted", "rejected", "blocked"],
      default: "pending",
    },

    chatId: {
      type: Schema.Types.ObjectId,
      ref: "Chat",
    },
  },
  {
    timestamps: true,
  },
);

RequestSchema.index({ sender: 1, receiver: 1 }, { unique: true });

export default model<IRequest>("Request", RequestSchema);
