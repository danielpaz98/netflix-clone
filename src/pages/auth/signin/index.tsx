import { useEffect, useRef } from "react";
// PLUGINS
import Link from "next/link";
import { signIn, getSession } from "next-auth/react";
// STYLES
import Styles from "~/components/AuthForm/styles.css";
// LAYOUTS
import { AuthLayout } from "~/layouts";
// COMPONENTS
import AuthForm from "~/components/AuthForm";
// ICONS
import GoogleIcon from "~/icons/google.svg";
import GithubIcon from "~/icons/github.svg";
import ThreeDotsIcon from "~/icons/three-dots.svg";
// TYPES
import type { UseFormReturn } from "react-hook-form";
import type { GetServerSidePropsContext } from "next";
// SCHEMAS
import { signInSchema, type SignInSchema } from "~/components/AuthForm/schemas";
// HOOKS
import { useAuthForm } from "~/components/AuthForm/hooks";

const SignInPage: NextPageWithLayout = () => {
  const { login, isLoading, errors } = useAuthForm<SignInSchema>();
  const formRef = useRef<UseFormReturn<SignInSchema>>(null);

  useEffect(() => {
    if (errors) {
      Object.entries(errors).forEach(([k, v]) => formRef.current?.setError(k as keyof typeof errors, v));
    }
  }, [errors]);

  return (
    <AuthForm ref={formRef} mode="onChange" resolver={signInSchema} onSubmit={login}>
      {({ formState: { errors: err }, register, clearErrors }) => (
        <>
          <AuthForm.Title>Sign In</AuthForm.Title>

          <AuthForm.Input
            feedbackType={err?.email && (err?.email?.type !== "server" ? "warning" : "error")}
            label="Email"
            name="email"
            type="text"
          />

          <AuthForm.Input
            feedbackType={err?.password && (err?.password?.type !== "server" ? "warning" : "error")}
            label="Password"
            type="password"
            {...register("password", {
              onChange: () => err?.password?.type === "server" && clearErrors("email"),
            })}
          />

          <AuthForm.Button disabled={isLoading} type="submit">
            {isLoading ? <ThreeDotsIcon height={14} /> : <span>Login</span>}
          </AuthForm.Button>

          <AuthForm.ProviderList>
            <AuthForm.ProviderList.Item onClick={() => signIn("google", { callbackUrl: "/profile" })}>
              <GoogleIcon height={28} width={28} />
            </AuthForm.ProviderList.Item>

            <AuthForm.ProviderList.Item onClick={() => signIn("github", { callbackUrl: "/profile" })}>
              <GithubIcon height={28} width={28} />
            </AuthForm.ProviderList.Item>
          </AuthForm.ProviderList>

          <Styles.MutedLink>
            <span>First time on Netflix?</span> <Link href="/auth/signup">Create an account.</Link>
          </Styles.MutedLink>
        </>
      )}
    </AuthForm>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getSession(ctx);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

SignInPage.layout = AuthLayout;

export default SignInPage;
