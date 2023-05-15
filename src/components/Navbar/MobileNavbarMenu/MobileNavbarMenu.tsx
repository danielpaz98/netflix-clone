// STYLES
import Styles from "./styles.css";

type Props = React.ComponentProps<"div">;

const MobileNavbarMenu = ({ children, ...restProps }: Props) => {
  return (
    <Styles.Menu role="menu" tabIndex={0} {...restProps}>
      {children}
    </Styles.Menu>
  );
};

export default MobileNavbarMenu;
