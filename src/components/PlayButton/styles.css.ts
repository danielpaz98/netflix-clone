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
        padding: 0.5rem;
        border-radius: 50%;

        & > span > *:nth-of-type(1) {
          width: 2.35rem;
          height: 2.35rem;
        }
      `}
  `,
};

export default Styles;
