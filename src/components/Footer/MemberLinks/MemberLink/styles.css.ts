import styled from "@emotion/styled";
// PLUGINS
import NextLink from "next/link";

const Styles = {
  MemberLinkItem: styled.li`
    display: inline-block;
    flex: 0 0 50%;
    list-style-type: none;
    margin-bottom: 1rem;

    @media screen and (min-width: 880px) {
      flex-basis: 25%;
    }
  `,
  MemberLink: styled(NextLink)`
    color: grey;

    &:hover {
      text-decoration: underline;
    }
  `,
};

export default Styles;
