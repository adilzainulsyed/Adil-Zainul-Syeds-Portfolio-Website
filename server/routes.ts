import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { ZodError } from "zod";

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
      if (error instanceof ZodError) {
        const firstError = error.errors[0];
        res.status(400).json({ message: firstError?.message || "Invalid input" });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
      }
    }
  });

  return httpServer;
}
