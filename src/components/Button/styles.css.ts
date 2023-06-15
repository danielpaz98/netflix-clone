import isPropValid from "@emotion/is-prop-valid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
// PLUGINS
import NextLink from "next/link";
// THEME VARIABLES
import { colors } from "~/styles/variables";
// TYPES
import type { DefaultTheme } from "~/styles";
import { IconPosition, type Props as TProps } from "./index";

export type Props = TProps & {
  hasIcon?: boolean;
  iconPosition?: keyof typeof IconPosition;
  color?: keyof typeof variantColor;
};

export const variantColor = {
  primary: {
    color: colors.black,
    bg_color: colors.white,
    hover_color: `${colors.white}bf`,
  },
  secondary: {
    color: colors.white,
    bg_color: `${colors.dove_gray}b3`,
    hover_color: `${colors.dove_gray}66`,
  },
} as const;

export const buttonStyles = ({ theme, color, iconPosition, hasIcon }: Props & { theme: DefaultTheme }) =>
  css`
    padding: 0.5rem;
    border-radius: 0.25rem;
    word-break: break-word;
    white-space: nowrap;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 500;
    white-space: pre-wrap;

    ${color &&
    css`
      color: ${variantColor[color].color ?? theme.colors.white};
      background-color: ${variantColor[color].bg_color ?? theme.colors.charcoal};

      &:not(:disabled):hover {
        background-color: ${variantColor[color].hover_color ?? `${theme.colors.charcoal}bf`};
      }
    `};

    ${iconPosition === IconPosition.right &&
    css`
      padding-left: 1.5rem;
      padding-right: 1.25rem;
    `};

    ${iconPosition === IconPosition.left &&
    css`
      padding-left: 1.25rem;
      padding-right: 1.5rem;
    `};

    ${hasIcon &&
    css`
      display: inline-flex;
      align-items: center;
      gap: 0.625rem;
    `};
  `;
const Styles = {
  Button: styled.button<Props>`
    ${buttonStyles}
  `,
  Link: styled(NextLink, {
    shouldForwardProp: (prop) => isPropValid(prop),
  })<Props>`
    ${buttonStyles}
  `,
  Icon: styled.span`
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
  `,
};

export default Styles;
