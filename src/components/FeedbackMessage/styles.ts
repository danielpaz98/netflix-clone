import styled, { css } from "styled-components";
// TYPES
import { Props } from "./index";

const Styles = {
  Container: styled.div<{ feedbackType?: Props["feedbackType"] }>`
    margin-bottom: -6px;
    padding: 6px 3px;
    font-size: 13px;
    ${({ feedbackType, theme }) =>
      feedbackType &&
      css`
        color: ${theme.colors[feedbackType]};
      `}
  `,
};

export default Styles;
