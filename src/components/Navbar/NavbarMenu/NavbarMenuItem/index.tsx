// STYLES
import Styles from "./styles.css";

type Props = React.ComponentProps<"li">;

const NavbarMenuItem = ({ children, ...restProps }: Props) => {
  return <Styles.MenuItem {...restProps}>{children}</Styles.MenuItem>;
};

export default NavbarMenuItem;
