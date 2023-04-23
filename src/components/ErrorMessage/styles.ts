import styled from "styled-components";

const Styles = {
  Container: styled.div`
    color: ${({ theme }) => theme.colors.warning};
    margin-bottom: -6px;
    padding: 6px 3px;
    font-size: 13px;
  `,
};

export default Styles;
