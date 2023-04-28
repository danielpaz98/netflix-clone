import styled from "styled-components";
// PLUGINS
import Link from "next/link";

const Styles = {
  ShadedGradient: styled.div`
    position: relative;
    height: 4.25rem;
    z-index: 2;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 10%, transparent);
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 100;
  `,
  ProfilesContainer: styled.div`
    text-align: center;
    max-width: 80%;
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
      & picture::after {
        border-color: ${({ theme }) => theme.colors.white};
      }

      & figcaption {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  `,
};

export default Styles;
