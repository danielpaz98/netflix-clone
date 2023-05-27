// STYLES
import Styles from "./styles.css";
// COMPONENTS
import { Props as ButtonProps } from "~/components/Button";
// ICONS
import PlayIcon from "~/icons/play.svg";

export type Props = ButtonProps & {
  flatButton?: boolean;
};

const PlayButton = ({ children, flatButton = true, ...restProps }: Props) => {
  return (
    <Styles.PlayButton {...restProps} flatButton={flatButton} startIcon={<PlayIcon />}>
      {flatButton && <>{children}</>}
    </Styles.PlayButton>
  );
};

export default PlayButton;
