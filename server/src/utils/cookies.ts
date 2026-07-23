// utils/cookies.ts
import { Response } from "express";

export const setAuthCookie = (res: Response, token: string) => {
  res.cookie("token", token, {
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
    httpOnly: true,
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
  });
};
