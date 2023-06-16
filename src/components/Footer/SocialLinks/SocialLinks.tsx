// STYLES
import Styles from "./styles.css";

type Props = React.ComponentProps<"ul">;

const SocialLinks = ({ children, ...restProps }: Props) => {
  return <Styles.SocialLinks {...restProps}>{children}</Styles.SocialLinks>;
};

export default SocialLinks;
