export interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  avatar: string;
  status: "active" | "offline" | "banned";
  lastActive: string;
}

export type UserStatus = "all" | "offline" | "active" | "banned";
