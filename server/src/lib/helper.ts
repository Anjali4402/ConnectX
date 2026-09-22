import { IChat } from "../models/chat.model.js";

export const getOtherMember = (members: IChat[], userId: string) => {
  return members.find((member) => member._id.toString() !== userId.toString());
};
