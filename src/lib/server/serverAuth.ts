import type { NextApiRequest, NextApiResponse } from "next";
// PLUGINS
import { getServerSession } from "next-auth";
// CONSTANTS
import { authOptions } from "~/pages/api/auth/[...nextauth]";

async function serverAuth(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { user: currentUser } = (await getServerSession(req, res, authOptions)) || {};

    if (!currentUser?.email) return res.status(401).send("Not signed in");

    return { currentUser };
  } catch (err) {
    return res.status(500).end();
  }
}

export default serverAuth;
