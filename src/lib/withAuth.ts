// LIBRARIES
import { getSession } from "next-auth/react";
// TYPES
import type { Redirect, GetServerSidePropsResult, GetServerSidePropsContext } from "next";

type GsspResult = GetServerSidePropsResult<{ [key: string]: unknown }>;
type Gssp = (ctx: GetServerSidePropsContext) => Promise<GsspResult> | GsspResult;

function withAuth(gssp: Gssp, { redirect }: { redirect?: Redirect } = {}) {
  return async (ctx: GetServerSidePropsContext) => {
    const { user } = (await getSession(ctx)) || {};
    const redirectTo = { redirect: redirect ?? { permanent: false, destination: "/auth" } };

    if (!user) return redirectTo;

    const gsspData = await gssp(ctx);

    return gsspData;
  };
}

export default withAuth;
