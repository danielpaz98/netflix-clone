import styled from "@emotion/styled";

const Styles = {
  Container: styled.div`
    background-color: ${({ theme }) => theme.colors.nero};
    color: ${({ theme }) => theme.colors.white};
    min-height: 100%;
  `,
};

export default Styles;
