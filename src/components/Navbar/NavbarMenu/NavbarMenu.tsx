// STYLES
import Styles from "./styles.css";

type Props = React.ComponentProps<"ul">;

const NavbarMenu = ({ children, ...restProps }: Props) => {
  return <Styles.Menu {...restProps}>{children}</Styles.Menu>;
};

export default NavbarMenu;
