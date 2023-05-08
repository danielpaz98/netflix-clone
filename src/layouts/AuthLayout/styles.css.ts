import styled from "@emotion/styled";
// PLUGINS
import Link from "next/link";
// IMAGES
import NetflixLogo from "~/images/svg/logo.svg";

const Styles = {
  Container: styled.div`
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    min-height: 100vh;
    position: relative;
    z-index: 0;
    --header-height: 5.625rem;
  `,
  Picture: styled.picture`
    display: none;
    background-size: cover;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    opacity: 0.5;

    & img {
      min-width: 100%;
      min-height: 100%;
      max-width: none;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      display: block;
    }
  `,
  Header: styled.header`
    padding: 1.5rem;
    padding-left: 5%;
    height: var(--header-height);

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      background-image: ${({ theme }) => theme.gradients.shaded[100]};
      padding-left: 3%;
    }
  `,
  HeaderLink: styled(Link)`
    color: ${({ theme }) => theme.colors.brand};
  `,
  HeaderLogo: styled(NetflixLogo)`
    display: inline-block;
    width: 10.5rem;
  `,
  Main: styled.main`
    min-height: calc(100vh - var(--header-height));
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
  `,
};

export default Styles;
