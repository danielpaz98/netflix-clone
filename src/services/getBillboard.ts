import axios from "~/lib/axios";
// TYPES
import type { GetServerSidePropsContext } from "next";
import type { Movie } from "@prisma/client";

export default async function getBillboard(req: GetServerSidePropsContext["req"]) {
  const { data } = await axios.get<Movie>("/api/billboard", { headers: { Cookie: req.headers.cookie } });

  return data;
}
