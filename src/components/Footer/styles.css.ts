import styled from "@emotion/styled";

const Styles = {
  Footer: styled.footer`
    box-sizing: content-box;
    margin: 1.25rem auto 0;
    max-width: 61.25rem;
    padding: 0 4%;
  `,
  MemberService: styled.div`
    margin-bottom: 1.25rem;
  `,
  MemberServiceCode: styled.button`
    background: transparent;
    color: grey;
    border: 1px solid grey;
    font-size: 0.8125rem;
    padding: 0.5em;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  `,
  MemberCopyright: styled.div`
    margin-bottom: 0.9375rem;
    font-size: 0.6875rem;
    color: grey;
  `,
};

export default Styles;
