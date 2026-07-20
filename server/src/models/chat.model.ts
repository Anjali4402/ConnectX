import { Schema, model, Types, Document } from "mongoose";

export type ChatType = "single" | "group";

export interface IChat extends Document {
  type: ChatType;

  members: Types.ObjectId[];

  groupName?: string;

  groupImage?: string;

  createdBy?: Types.ObjectId;

  lastMessage?: Types.ObjectId;

  unreadCount: Map<string, number>;

  isArchived: boolean;

  isPinned: boolean;

  isMuted: boolean;

  createdAt: Date;
  updatedAt: Date;
}

const ChatSchema = new Schema<IChat>(
  {
    type: {
      type: String,
      enum: ["single", "group"],
      required: true,
    },

    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],

    groupName: String,

    groupImage: String,

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    lastMessage: {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },

    unreadCount: {
      type: Map,
      of: Number,
      default: {},
    },

    isArchived: {
      type: Boolean,
      default: false,
    },

    isPinned: {
      type: Boolean,
      default: false,
    },

    isMuted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export default model<IChat>("Chat", ChatSchema);
