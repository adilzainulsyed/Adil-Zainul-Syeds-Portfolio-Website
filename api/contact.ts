import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { pgTable, text, serial, timestamp } from 'drizzle-orm/pg-core';
import { z } from 'zod';

const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

const insertMessageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const messageData = insertMessageSchema.parse(req.body);

    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const db = drizzle(pool);

    await db.insert(messages).values(messageData);
    await pool.end();

    return res.status(200).json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const firstError = error.errors[0];
      return res.status(400).json({ message: firstError?.message || "Invalid input" });
    }
    console.error("Contact form error:", error);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
}
