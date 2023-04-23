import { forwardRef, useImperativeHandle } from "react";
// PLUGINS
import { FormProvider, useForm } from "react-hook-form";
// STYLES
import Styles from "./styles";
// TYPES
import type { SubmitHandler, SubmitErrorHandler, UseFormProps, UseFormReturn, FieldValues } from "react-hook-form";

export interface SignInFormState {
  name: string;
  email: string;
  password: string;
}

export interface Props<TFieldValues extends FieldValues> extends UseFormProps<TFieldValues> {
  className?: string;
  children?: React.ReactNode;
  onSubmit?: SubmitHandler<TFieldValues>;
  onError?: SubmitErrorHandler<TFieldValues>;
}

type AuthFormRef<TFieldValues extends FieldValues> = React.Ref<Partial<UseFormReturn<TFieldValues>>>;

function AuthForm<TFieldValues extends FieldValues>(
  { onSubmit = () => {}, onError = () => {}, className, children, ...restProps }: Props<TFieldValues>,
  ref?: AuthFormRef<TFieldValues>
) {
  const methods = useForm<TFieldValues>({ ...restProps });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { handleSubmit, control, register, ...restMethods } = methods;

  useImperativeHandle(ref, () => ({ ...restMethods }));

  return (
    <FormProvider {...methods}>
      <Styles.AuthForm autoComplete="off" className={className} onSubmit={handleSubmit(onSubmit, onError)}>
        {children}
      </Styles.AuthForm>
    </FormProvider>
  );
}

const AuthFormWithForwardRef = forwardRef(AuthForm) as <TFieldValues extends FieldValues>(
  props: Props<TFieldValues> & { ref?: AuthFormRef<TFieldValues> }
) => ReturnType<typeof AuthForm>;

export default AuthFormWithForwardRef;
