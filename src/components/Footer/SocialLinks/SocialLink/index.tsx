// STYLES
import Styles from "./styles.css";
// TYPES
import { LinkProps } from "next/link";

type Props = LinkProps & {
  children?: React.ReactNode;
};

const SocialLink = ({ href, children }: Props) => {
  return (
    <Styles.SocialLinkItem>
      <Styles.SocialLink href={href}>{children}</Styles.SocialLink>
    </Styles.SocialLinkItem>
  );
};

export default SocialLink;
