import { Express, Request, Response } from "express";
import expressLoader from "./express";

export default async ({ expressApp }: { expressApp: Express }) => {
  try {
    await expressLoader({ app: expressApp });
    console.log("✌️ Express loaded");
  } catch (error) {
    console.log(error);
  }
};
