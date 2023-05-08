import styled from "@emotion/styled";
// PLUGINS
import Link from "next/link";

const Styles = {
  ShadedGradient: styled.div`
    position: relative;
    height: 4.25rem;
    z-index: 2;
    background-image: ${({ theme }) => theme.gradients.shaded[200]};
  `,
  Main: styled.main`
    background-color: ${({ theme }) => theme.colors.nero};
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    text-align: center;
    top: 0;
    z-index: 0;
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
    animation: animate-pop 0.45s forwards;

    @keyframes animate-pop {
      from {
        opacity: 0;
        transform: scale(1.1);
      }

      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  `,
  ProfilesContainer: styled.div`
    text-align: center;
    max-width: 80%;
  `,
  Title: styled.h1`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize["3xl"]};
    font-weight: 400;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 3.5vw;
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
