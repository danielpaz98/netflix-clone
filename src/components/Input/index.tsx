// STYLES
import Styles from "./styles.css";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ className, label, name, placeholder, type, onChange, ...restProps }: Props) => {
  const floatLabel = Boolean(label && !placeholder);

  return (
    <Styles.Container className={className}>
      <Styles.Input
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
};

export default Input;
