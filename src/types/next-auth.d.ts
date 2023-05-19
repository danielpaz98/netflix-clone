// TYPES
import type { User as TUser } from "@prisma/client";

type User = Omit<TUser, "createAt" | "updatedAt" | "emailVerified" | "hashedPassword">;

declare module "next-auth" {
  interface Session {
    user: User;
  }
}
