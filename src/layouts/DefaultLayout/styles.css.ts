import styled from "styled-components";

const Styles = {
  Container: styled.div`
    background-color: ${({ theme }) => theme.colors.black_russian};
    color: ${({ theme }) => theme.colors.white};
    height: 100%;
  `,
  Main: styled.main`
    height: 100%;
  `,
};

export default Styles;
