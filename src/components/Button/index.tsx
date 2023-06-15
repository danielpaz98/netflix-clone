// STYLES
import Styles, { variantColor, type Props as StyledButtonProps } from "./styles.css";
// TYPES
import type { StyledComponent } from "@emotion/styled";
import type { LinkProps } from "next/link";

export enum IconPosition {
  left = "left",
  right = "right",
}

interface CommonProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  color?: keyof typeof variantColor;
  rounded?: boolean;
}

export interface ButtonProps extends Omit<React.ComponentProps<"button">, "color">, CommonProps {
  href?: never;
}

export interface ButtonLinkProps extends LinkProps, CommonProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export type Props = ButtonProps | ButtonLinkProps;

function Button({ children, startIcon, endIcon, color, rounded, ...restProps }: Props) {
  const hasIcon = Boolean(startIcon) || Boolean(endIcon);
  const iconPosition = (startIcon && IconPosition.left) || (endIcon && IconPosition.right) || undefined;
  const Component = (restProps.href ? Styles.Link : Styles.Button) as StyledComponent<StyledButtonProps>;

  return (
    <Component {...restProps} color={color} hasIcon={hasIcon} iconPosition={iconPosition} rounded={rounded}>
      {startIcon && <Styles.Icon>{startIcon}</Styles.Icon>}
      {children}
      {endIcon && <Styles.Icon>{endIcon}</Styles.Icon>}
    </Component>
  );
}

export default Button;
