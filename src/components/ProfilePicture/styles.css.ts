import styled from "styled-components";

const Styles = {
  Figure: styled.figure`
    display: block;
  `,
  Picture: styled.picture`
    display: block;
    position: relative;
    width: 11rem;
    height: 11rem;
    border-radius: 6px;
    border: 2px solid transparent;
    overflow: hidden;
  `,
  Text: styled.figcaption`
    text-align: center;
    text-transform: capitalize;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.mischka};
  `,
};

export default Styles;
