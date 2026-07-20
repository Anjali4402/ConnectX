import { Schema, model, Types, Document } from "mongoose";

export type MessageType =
  | "text"
  | "image"
  | "video"
  | "file"
  | "audio"
  | "location";

export interface IMessage extends Document {
  chatId: Types.ObjectId;

  sender: Types.ObjectId;

  type: MessageType;

  text?: string;

  fileUrl?: string;

  replyTo?: Types.ObjectId;

  seenBy: Types.ObjectId[];

  deliveredTo: Types.ObjectId[];

  deletedFor: Types.ObjectId[];

  editedAt?: Date;

  createdAt: Date;
  updatedAt: Date;
}

const MessageSchema = new Schema<IMessage>(
  {
    chatId: {
      type: Schema.Types.ObjectId,
      ref: "Chat",
      required: true,
    },

    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    type: {
      type: String,
      enum: ["text", "image", "video", "file", "audio", "location"],
      default: "text",
    },

    text: String,

    fileUrl: String,

    replyTo: {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },

    seenBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    deliveredTo: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    deletedFor: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    editedAt: Date,
  },
  {
    timestamps: true,
  },
);

export default model<IMessage>("Message", MessageSchema);
