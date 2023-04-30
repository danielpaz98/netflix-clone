import { useCallback, useState } from "react";
// PLUGINS
import axios, { type AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
// TYPES
import type { user as User } from "@prisma/client";
import type { FieldValues, ErrorOption, FieldPath } from "react-hook-form";
import type { SignInSchema, SignUpSchema } from "~/components/AuthForm/schemas";

type ErrorState<TFieldValues extends FieldValues = FieldValues> = Record<
  FieldPath<TFieldValues> | `root.${string}` | "root",
  ErrorOption & {
    shouldFocus?: boolean;
  }
>;

type SetErrors<TFieldValues extends FieldValues> = (errors: ErrorState<TFieldValues>) => void;

export default function useAuthForm<TFieldValues extends FieldValues>() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrorsState] = useState<ErrorState<TFieldValues>>();
  const router = useRouter();

  const setErrors: SetErrors<FieldValues> = useCallback((errs) => setErrorsState(errs), []);

  const login = useCallback(
    async (data: SignInSchema) => {
      setIsLoading(true);

      try {
        const res = await signIn("credentials", { ...data, redirect: false });

        if (res?.ok) {
          void router.push("/profile");
        } else {
          setErrors({
            password: { type: "server", message: "Incorrect email or password." },
            email: { type: "server" },
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    },
    [router, setErrors]
  );

  const register = useCallback(
    async (data: SignUpSchema) => {
      setIsLoading(true);

      try {
        const res = await axios.post<User>("/api/register", { ...data });

        if (res?.status === 200) await login({ ...data });
      } catch (err) {
        const error = err as AxiosError<Error>;

        if (error.response?.status === 422) {
          setErrors({
            email: { type: "server", message: error?.response?.data.message },
          });
        }
      } finally {
        setIsLoading(false);
      }
    },
    [login, setErrors]
  );

  return { register, login, isLoading, errors };
}
