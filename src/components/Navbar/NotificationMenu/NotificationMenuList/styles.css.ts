import styled from "@emotion/styled";

const Styles = {
  Menu: styled.ul`
    display: block;
    margin: 0;
    padding-left: 0;
    list-style-type: none;
    overflow: auto;
    max-height: calc(100vh - 280px);

    & > li:not(:last-of-type) {
      border-bottom: 1px solid hsla(0, 0%, 100%, 0.25);
    }
  `,
};

export default Styles;
