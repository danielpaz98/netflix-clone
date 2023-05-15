// STYLES
import Styles from "./styles.css";

type Props = React.ComponentProps<"li">;

const AccountMenuListItem = ({ children, ...restProps }: Props) => {
  return <Styles.ListItem {...restProps}>{children}</Styles.ListItem>;
};

export default AccountMenuListItem;
