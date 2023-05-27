/* eslint-disable @typescript-eslint/no-unused-vars */
namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_BASE_URL: string;
    // # Prisma
    DATABASE_URL: string;
    // # Next Auth
    NEXTAUTH_JWT_SECRET: string;
    NEXTAUTH_SECRET: string;
    // # Next Auth - Github
    GITHUB_ID: string;
    GITHUB_SECRET: string;
    // # Next Auth - Google
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
  }
}
