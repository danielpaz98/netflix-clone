import { forwardRef } from "react";
// STYLES
import Styles from "./styles.css";

export interface Props extends React.ComponentPropsWithRef<"input"> {
  label: string;
}

const Input = forwardRef(
  (
    { className, label, name, placeholder, type, onChange, ...restProps }: Props,
    ref?: React.Ref<HTMLInputElement>
  ) => {
    const floatLabel = Boolean(label && !placeholder);

    return (
      <Styles.Container className={className}>
        <Styles.Input
          {...restProps}
          ref={ref}
          floatLabel={floatLabel}
          id={name}
          name={name}
          placeholder={placeholder ?? " "}
          type={type}
          onChange={onChange}
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
