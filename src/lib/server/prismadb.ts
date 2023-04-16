import { PrismaClient } from "@prisma/client";

const prismadb =
  global.prismadb ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") global.prismadb = prismadb;

export default prismadb;
