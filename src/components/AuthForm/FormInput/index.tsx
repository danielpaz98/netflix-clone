import { forwardRef } from "react";
// PLUGINS
import { useFormContext } from "react-hook-form";
// STYLES
import Styles from "./styles.css";
// COMPONENTS
import FeedbackMessage from "~/components/FeedbackMessage";
// TYPES
import type { Props as InputProps } from "~/components/Input";
import type { FeedbackType } from "~/components/FeedbackMessage";

export interface Props extends InputProps {
  feedbackType?: FeedbackType | undefined;
}

const FormInput = forwardRef(
  (
    { className, type, feedbackType, label, name, disabled, ...restProps }: Props,
    ref?: React.Ref<HTMLInputElement>
  ) => {
    const {
      register,
      formState: { isSubmitting, errors },
    } = useFormContext();

    return (
      <Styles.FormInputContainer className={className}>
        <Styles.FormInput
          ref={ref}
          disabled={isSubmitting || disabled}
          feedbackType={feedbackType}
          label={label}
          type={type}
          {...(name && { ...register(name) })}
          {...restProps}
        />

        {errors?.[name as string] && (
          <FeedbackMessage feedbackType={feedbackType} text={errors?.[name as string]?.message as string} />
        )}
      </Styles.FormInputContainer>
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;
