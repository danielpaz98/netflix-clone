// PLUGINS
import { getSession } from "next-auth/react";
// TYPES
import type { Redirect, GetServerSidePropsResult, GetServerSidePropsContext } from "next";

type Props = { [key: string]: unknown };

type Gssp<P extends Props = Props> = (
  ctx: GetServerSidePropsContext
) => Promise<GetServerSidePropsResult<P>> | GetServerSidePropsResult<P>;

function withAuth(gssp: Gssp, { redirect }: { redirect?: Redirect } = {}) {
  return async (ctx: GetServerSidePropsContext) => {
    const { user } = (await getSession(ctx)) || {};
    const redirectTo = { redirect: redirect ?? { permanent: false, destination: "/auth/signin" } };

    if (!user) return redirectTo;

    const gsspData = (await gssp(ctx)) || {};

    if (!("props" in gsspData)) throw new Error("invalid getSSP result");

    const { props, ...restGssp } = gsspData;
    const gsspReturn = { ...restGssp, props: { user, ...(props as Props) } };

    return gsspReturn;
  };
}

export default withAuth;
