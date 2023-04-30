import styled, { css } from "styled-components";
// COMPONENTS
import Input from "~/components/Input";
// TYPES
import type { Props } from "./index";

const Styles = {
  FormInputContainer: styled.div`
    &:not(:last-child) {
      padding-bottom: 1rem;
    }
  `,
  FormInput: styled(Input)<{ feedbackType?: Props["feedbackType"] }>`
    ${({ feedbackType, theme }) =>
      feedbackType &&
      css`
        &::after {
          content: "";
          display: block;
          border-bottom-left-radius: 0.25rem;
          border-bottom-right-radius: 0.25rem;
          border-bottom: 2px solid ${theme.colors[feedbackType]};
          bottom: 0;
          height: 6px;
          left: 0;
          pointer-events: none;
          position: absolute;
          width: 100%;
        }
      `}
  `,
};

export default Styles;
