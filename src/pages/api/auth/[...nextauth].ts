import NextAuth, { type AuthOptions, type Session } from "next-auth";
// PROVIDERS
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
// PLUGINS
import omit from "just-omit";
import { compare } from "bcrypt";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
// LIBRARIES
import { prismadb } from "~/lib/server";
// IMAGES
import DefaultImage from "~/images/png/default-blue.png";

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) throw new Error("Email and password required");

        try {
          const dbUser = await prismadb.user.findUnique({ where: { email: credentials.email } });

          if (!dbUser || !dbUser.hashedPassword) throw new Error("Email does not exist");

          const isValidPassword = await compare(credentials.password, dbUser.hashedPassword);

          if (!isValidPassword) throw new Error("Incorrect password");

          const user = omit(dbUser, ["createAt", "updatedAt", "emailVerified", "hashedPassword"]);

          return user;
        } catch (err) {
          console.error(err);
        }

        return null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user, account }) {
      if (user) token.user = user;
      if (account?.provider === "google") token.picture = token?.picture?.split("=")[0];

      return token;
    },
    session({ session, token }) {
      session.user = token.user as Session["user"];
      session.user.image = (token.picture as Session["user"]["image"]) || DefaultImage.src;

      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  adapter: PrismaAdapter(prismadb),
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

export default NextAuth(authOptions);
