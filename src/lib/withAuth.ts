// PLUGINS
import { getSession } from "next-auth/react";
// TYPES
import type { Redirect, GetServerSidePropsResult, GetServerSidePropsContext } from "next";
import type { Session } from "next-auth";

type Props = { [key: string]: unknown };

type Gssp<P extends Props = Props> = (
  ctx: GetServerSidePropsContext,
  session?: Session | null
) => Promise<GetServerSidePropsResult<P>> | GetServerSidePropsResult<P>;

function withAuth(gssp: Gssp, { redirect }: { redirect?: Redirect } = {}) {
  return async (ctx: GetServerSidePropsContext) => {
    const session = await getSession(ctx);
    const redirectTo = { redirect: redirect ?? { permanent: false, destination: "/auth/signin" } };

    if (!session) return redirectTo;

    const gsspData = await gssp(ctx, session);

    return gsspData;
  };
}

export default withAuth;
