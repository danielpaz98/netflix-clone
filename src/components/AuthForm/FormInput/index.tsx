// PLUGINS
import { useFormContext } from "react-hook-form";
// STYLES
import Styles from "./styles";
// COMPONENTS
import Input, { Props as InputProps } from "~/components/Input";
import ErrorMessage from "~/components/ErrorMessage";

export type Props = InputProps;

const FormInput = ({ className, type, label, name, disabled, ...restProps }: Props) => {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext();

  return (
    <Styles.FormInput className={className}>
      <Input
        disabled={isSubmitting || disabled}
        label={label}
        type={type}
        {...register(name as string)}
        {...restProps}
      />

      {errors?.[name as string] && <ErrorMessage text={errors?.[name as string]?.message as string} />}
    </Styles.FormInput>
  );
};

export default FormInput;
