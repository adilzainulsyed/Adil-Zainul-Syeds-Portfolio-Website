import { messages, type InsertMessage } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async createMessage(insertMessage: InsertMessage): Promise<void> {
    await db.insert(messages).values(insertMessage);
  }
}

export const storage = new DatabaseStorage();
