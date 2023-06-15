// STYLES
import Styles from "./styles.css";
// COMPONENTS
import type { Props as ButtonProps } from "~/components/Button";
// TYPES
import type { StyledComponent } from "@emotion/styled";
// ICONS
import PlayIcon from "~/icons/play.svg";

type ExcludedProps = "startIcon" | "endIcon" | "rounded";

export type Props = Omit<ButtonProps, ExcludedProps> & {
  flatButton?: boolean;
};

const PlayButton = ({ children, flatButton, ...restProps }: Props) => {
  const isRounded = { ...(!flatButton && { rounded: true }) };

  return (
    <Styles.PlayButton
      {...(restProps as StyledComponent<Props>)}
      {...isRounded}
      flatButton={flatButton}
      startIcon={<PlayIcon />}>
      {flatButton && <>{children}</>}
    </Styles.PlayButton>
  );
};

export default PlayButton;
