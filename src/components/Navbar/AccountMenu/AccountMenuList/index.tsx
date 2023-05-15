// STYLES
import Styles from "./styles.css";

type Props = React.ComponentProps<"ul">;

const AccountMenuList = ({ children, ...restProps }: Props) => {
  return <Styles.List {...restProps}>{children}</Styles.List>;
};

export default AccountMenuList;
