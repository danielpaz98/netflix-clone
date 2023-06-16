// STYLES
import Styles from "./styles.css";

type Props = React.ComponentProps<"ul">;

const MemberLinks = ({ children, ...restProps }: Props) => {
  return <Styles.MemberLinks {...restProps}>{children}</Styles.MemberLinks>;
};

export default MemberLinks;
