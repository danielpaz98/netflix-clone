import styled from "@emotion/styled";
// PLUGINS
import NextLink from "next/link";

const Styles = {
  SocialLinkItem: styled.li`
    display: inline-block;
  `,
  SocialLink: styled(NextLink)`
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid transparent;
    margin: 0 -1px;

    & > svg {
      height: 1.5625rem;
      width: 2.25rem;
    }
  `,
};

export default Styles;
