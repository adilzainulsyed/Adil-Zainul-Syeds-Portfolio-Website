import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const messageData = insertMessageSchema.parse(req.body);
      await storage.createMessage(messageData);
      res.json({ success: true });
    } catch (error) {
      res.status(400).json({ error: "Invalid input" });
    }
  });

  return httpServer;
}
