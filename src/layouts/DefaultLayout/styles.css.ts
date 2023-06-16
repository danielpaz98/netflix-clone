import styled from "@emotion/styled";

const Styles = {
  Container: styled.div`
    cursor: default;
    background-color: ${({ theme }) => theme.colors.chinese_black};
    color: ${({ theme }) => theme.colors.white};
    min-height: 100%;
    line-height: 1.2;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  `,
};

export default Styles;
