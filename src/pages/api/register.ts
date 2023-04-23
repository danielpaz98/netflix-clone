import type { NextApiRequest, NextApiResponse } from "next";
// PLUGINS
import bcrypt from "bcrypt";
// LIBRARIES
import { prismadb } from "~/lib/server";

type RequestBody = { email: string; name: string; password: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { email, name, password } = req.body as RequestBody;

    const existingUser = await prismadb.user.findUnique({ where: { email } });

    if (existingUser) return res.status(422).json({ error: "Email taken" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    return res.status(200).json(user);
  } catch (err) {
    const error = err as Error;

    return res.status(400).json({ error: `Something went wrong: ${error.message}` });
  }
}