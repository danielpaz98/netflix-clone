import styled from "@emotion/styled";

const Styles = {
  Container: styled.div`
    background-color: ${({ theme }) => theme.colors.nero};
    color: ${({ theme }) => theme.colors.white};
    height: 100%;
  `,
  Main: styled.main`
    height: 100%;
  `,
};

export default Styles;
