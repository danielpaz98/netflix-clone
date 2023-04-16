import type { NextApiRequest, NextApiResponse } from "next";
// LIBRARIES
import { getServerSession } from "next-auth";
// CONSTANTS
import { authOptions } from "~/pages/api/auth/[...nextauth]";

async function serverAuth(req: NextApiRequest, res: NextApiResponse) {
  const { user: currentUser } = (await getServerSession(req, res, authOptions)) || {};

  if (!currentUser?.email) throw new Error("Not signed in");

  return { currentUser };
}

export default serverAuth;
