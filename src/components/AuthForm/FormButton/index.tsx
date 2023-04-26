// STYLES
import Styles from "./styles.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const FormButton = ({ className, children, ...restProps }: Props) => {
  return (
    <Styles.FormButton className={className} {...restProps}>
      {children}
    </Styles.FormButton>
  );
};

export default FormButton;
