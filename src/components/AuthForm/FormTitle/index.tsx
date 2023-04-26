// STYLES
import Styles from "./styles.css";

export type Props = {
  className?: string;
  children?: React.ReactNode;
};

const FormTitle = ({ className, children }: Props) => {
  return <Styles.FormTitle className={className}>{children}</Styles.FormTitle>;
};

export default FormTitle;
