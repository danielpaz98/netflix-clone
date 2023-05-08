// STYLES
import Styles from "./styles.css";

type Props = React.ComponentProps<"button">;

const FormButton = ({ className, children, ...restProps }: Props) => {
  return (
    <Styles.FormButton className={className} {...restProps}>
      {children}
    </Styles.FormButton>
  );
};

export default FormButton;
