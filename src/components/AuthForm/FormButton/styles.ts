import styled from "styled-components";

const Styles = {
  FormButton: styled.button`
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 700;
    padding: 1rem;
    margin-top: 1.5rem;
    background-color: ${({ theme }) => theme.colors.brand};
    color: ${({ theme }) => theme.colors.white};
    max-width: 100%;
    width: 100%;

    &:disabled {
      pointer-events: none;
    }
  `,
};

export default Styles;
