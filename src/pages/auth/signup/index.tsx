import { useEffect, useRef } from "react";
// PLUGINS
import Link from "next/link";
import { getSession } from "next-auth/react";
// STYLES
import Styles from "~/components/AuthForm/styles.css";
// LAYOUTS
import { AuthLayout } from "~/layouts";
// COMPONENTS
import AuthForm from "~/components/AuthForm";
// ICONS
import ThreeDotsIcon from "~/icons/three-dots.svg";
// TYPES
import type { UseFormReturn } from "react-hook-form";
import type { GetServerSidePropsContext } from "next";
// SCHEMAS
import { signUpSchema, type SignUpSchema } from "~/components/AuthForm/schemas";
// HOOKS
import { useAuthForm } from "~/components/AuthForm/hooks";

const SignUpPage: NextPageWithLayout = () => {
  const { register, isLoading, errors } = useAuthForm<SignUpSchema>();
  const formRef = useRef<UseFormReturn<SignUpSchema>>(null);

  useEffect(() => {
    if (errors) formRef.current?.setError(...errors);
  }, [errors]);

  return (
    <AuthForm ref={formRef} mode="onChange" resolver={signUpSchema} onSubmit={register}>
      <AuthForm.Title>Sign Up</AuthForm.Title>

      <AuthForm.Input label="Username" name="name" type="text" />
      <AuthForm.Input label="Email" name="email" type="text" />
      <AuthForm.Input label="Password" name="password" type="password" />

      <AuthForm.Button disabled={isLoading} type="submit">
        {isLoading ? <ThreeDotsIcon height={14} /> : <span>Register</span>}
      </AuthForm.Button>

      <Styles.MutedLink>
        <span>Already have an account?</span> <Link href="/auth/signin">Login.</Link>
      </Styles.MutedLink>
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

SignUpPage.layout = AuthLayout;

export default SignUpPage;
