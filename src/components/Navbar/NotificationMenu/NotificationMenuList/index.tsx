// STYLES
import Styles from "./styles.css";

type Props = React.ComponentProps<"ul">;

const NotificationMenuList = ({ children, ...restProps }: Props) => {
  return <Styles.Menu {...restProps}>{children}</Styles.Menu>;
};

export default NotificationMenuList;
