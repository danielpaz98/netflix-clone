// TYPES
import type { user } from "@prisma/client";

type User = Omit<user, "createAt" | "updatedAt" | "emailVerified" | "hashedPassword">;

declare module "next-auth" {
  interface Session {
    user: User;
  }
}
