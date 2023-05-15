import styled from "@emotion/styled";

const Styles = {
  Menu: styled.div`
    width: 16.25rem;
    box-shadow: 0 0 0 1px hsla(0, 0%, 100%, 0.15);
    background-color: ${({ theme }) => `${theme.colors.black}e6`};

    & > ul:not(:last-of-type) {
      border-bottom: 1px solid hsla(0, 0%, 100%, 0.25);
    }
  `,
};

export default Styles;
