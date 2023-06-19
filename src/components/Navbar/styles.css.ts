import { css } from "@emotion/react";
import styled from "@emotion/styled";
// PLUGINS
import Link from "next/link";
// IMAGES
import NetflixLogo from "~/images/svg/logo.svg";

export const headerHeight = "4.375rem";
const offsetTop = 66;

const Styles = {
  Header: styled.header<{ scrollY?: number }>`
    position: sticky;
    top: 0;
    z-index: 1;
    height: ${headerHeight};
    width: 100%;
    padding: 0 4%;
    background-image: ${({ theme }) => theme.gradients.shaded[200]};
    background-color: ${({ scrollY, theme }) =>
      (scrollY as number) >= offsetTop ? theme.colors.chinese_black : "transparent"};
    transition: background-color 0.4s;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: 950px) {
      height: 2.5rem;
    }
  `,
  HeaderLink: styled(Link)`
    color: ${({ theme }) => theme.colors.brand};
    margin-right: 1.5625rem;

    @media screen and (max-width: 1150px) {
      margin-right: 0.3125rem;
    }
  `,
  HeaderLogo: styled(NetflixLogo)`
    display: block;
    width: 5.7813rem;

    @media screen and (max-width: 950px) {
      width: 4rem;
    }
  `,
  Nav: styled.nav`
    height: 100%;
    display: flex;
    align-items: center;
  `,
  NavContainer: styled.section`
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
  `,
  NavbarMenu: css`
    margin-left: 1.125rem;

    & > li:first-of-type {
      display: block;
    }

    & > li:not(:first-of-type) {
      display: none;
    }

    @media screen and (min-width: 1000px) {
      & > li:first-of-type {
        display: none;
      }

      & > li:not(:first-of-type) {
        display: flex;
      }
    }

    & > li {
      font-size: clamp(0.5625rem, 1.025vw, 0.875rem);
    }
  `,
  SearchItem: css`
    @media screen and (max-width: 400px) {
      display: none;
    }
  `,
  KidsItem: css`
    @media screen and (max-width: 1100px) {
      display: none;
    }
  `,
};

export default Styles;
