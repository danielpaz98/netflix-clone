// STYLES
import Styles from "./styles.css";

type Props = React.ComponentProps<"div">;

const NotificationMenu = ({ children, ...restProps }: Props) => {
  return (
    <Styles.Menu role="menu" tabIndex={0} {...restProps}>
      {children}
    </Styles.Menu>
  );
};

export default NotificationMenu;
