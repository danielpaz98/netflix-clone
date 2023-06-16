// STYLES
import Styles from "./styles.css";
// TYPES
import { LinkProps } from "next/link";

type Props = LinkProps & {
  children?: React.ReactNode;
};

const MemberLink = ({ href, children }: Props) => {
  return (
    <Styles.MemberLinkItem>
      <Styles.MemberLink href={href}>{children}</Styles.MemberLink>
    </Styles.MemberLinkItem>
  );
};

export default MemberLink;
