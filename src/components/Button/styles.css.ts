import isPropValid from "@emotion/is-prop-valid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
// PLUGINS
import NextLink from "next/link";
// THEME VARIABLES
import { colors } from "~/theme/variables";
// TYPES
import type { DefaultTheme } from "~/theme";
import { IconPosition, type Props as TProps } from "./index";

export type Props = TProps & {
  hasIcon?: boolean;
  iconPosition?: keyof typeof IconPosition;
};

const colors2 = {
  primary: {
    color: colors.white,
    textColor: colors.black,
    hoverColor: `${colors.white}bf`,
  },
  secondary: {
    color: `${colors.dove_gray}b3`,
    textColor: colors.white,
    hoverColor: `${colors.dove_gray}66`,
  },
} as const;

export const buttonStyles = ({ theme, color, iconPosition, hasIcon }: Props & { theme: DefaultTheme }) =>
  css`
    display: block;
    border-radius: 0.25rem;
    padding: 0.5rem;
    padding-left: 1.25rem;
    padding-right: 1.5rem;
    word-break: break-word;
    white-space: nowrap;
    color: ${color ? colors2[color].textColor : theme.colors.white};
    background-color: ${color ? colors2[color]?.color : theme.colors.charcoal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 500;
    white-space: pre-wrap;

    &:not(:disabled):hover {
      background-color: ${color ? colors2[color].hoverColor : `${theme.colors.charcoal}bf`};
    }

    ${iconPosition === IconPosition.right &&
    css`
      padding-left: 1.5rem;
      padding-right: 1.25rem;
    `}

    ${hasIcon &&
    css`
      display: flex;
      align-items: center;
      gap: 0.625rem;
    `}
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
    flex-shrink: 0;

    & > *:nth-of-type(1) {
      width: 1.5rem;
      height: 1.5rem;
    }
  `,
};

export default Styles;
