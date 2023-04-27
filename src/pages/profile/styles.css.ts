import styled from "styled-components";
// PLUGINS
import Link from "next/link";

const Styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 2rem;
  `,
  Title: styled.h1`
    font-size: ${({ theme }) => theme.fontSize["4xl"]};
    text-align: center;
    margin-bottom: 2.5rem;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: ${({ theme }) => theme.fontSize["6xl"]};
    }
  `,
  Link: styled(Link)`
    &:hover {
      & picture {
        border-color: ${({ theme }) => theme.colors.white};
      }

      & figcaption {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  `,
};

export default Styles;
