import { Request, Response } from "express";
import asyncHandler from "../middlewares/asyncHandler.js";
import Chat from "../models/chat.model.js";
import { emitEvent } from "../utils/features.js";
import { ALERT, REFETCH_CHATS } from "../constants/events.js";
import AppError from "../errors/AppError.js";

const newGroupChat = asyncHandler(async (req: Request, res: Response) => {
  // Extract group details and member IDs from the request body.
  const { name, members, description, avatar } = req.body;

  // A group must contain at least two members besides the creator.
  if (members.length < 2) {
    throw new AppError("A group chat must have at least 2 members.", 400);
  }

  // Add the creator to the list of group members.
  const allMembers = [...members, req.user];

  // Create the group chat with the provided details and members.
  await Chat.create({
    type: "group",
    members: allMembers,
    name: name,
    avatar: avatar,
    description,
    createdBy: req.user,
  });

  // Notify all group members that they have been added to the group.
  emitEvent(req, ALERT, allMembers, `Welcome to ${name} group.`);

  // Notify the other members to refresh their chat list.
  emitEvent(req, REFETCH_CHATS, members);

  // Return a successful response.
  return res.status(201).json({
    success: true,
    data: null,
    message: "Group created successfully!",
  });
});

export { newGroupChat };
