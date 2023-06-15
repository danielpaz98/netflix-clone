import { css } from "@emotion/react";
import styled from "@emotion/styled";
// COMPONENTS
import Button from "~/components/Button";
// TYPES
import { type Props } from "./index";

const Styles = {
  PlayButton: styled(Button)<Props>`
    ${({ flatButton }) =>
      !flatButton &&
      css`
        & > span:first-of-type {
          width: 2.35rem;
          height: 2.35rem;
        }
      `}
  `,
};

export default Styles;
