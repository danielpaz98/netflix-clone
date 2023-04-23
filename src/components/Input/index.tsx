import { forwardRef } from "react";
// STYLES
import Styles from "./styles";

export enum ErrorType {
  success = "success",
  warning = "warning",
  error = "error",
}

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorType?: keyof typeof ErrorType;
}

const Input = forwardRef(
  (
    { className, label, name, placeholder, type, errorType: errorTypeProp, onChange, ...restProps }: Props,
    ref?: React.Ref<HTMLInputElement>
  ) => {
    const floatLabel = Boolean(label && !placeholder);
    const errorType = errorTypeProp && ErrorType[errorTypeProp];

    return (
      <Styles.Container className={className} errorType={errorType}>
        <Styles.Input
          ref={ref}
          floatLabel={floatLabel}
          id={name}
          name={name}
          placeholder={placeholder ?? " "}
          type={type}
          onChange={onChange}
          {...restProps}
        />

        {label && (
          <Styles.Label floatLabel={floatLabel} htmlFor={name}>
            {label}
          </Styles.Label>
        )}
      </Styles.Container>
    );
  }
);

Input.displayName = "Input";

export default Input;
