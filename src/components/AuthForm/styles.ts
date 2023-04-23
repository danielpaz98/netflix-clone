import styled from "styled-components";

const Styles = {
  AuthForm: styled.form`
    width: 100%;
    min-height: 34rem;
    border-radius: 4px;
    padding: 5%;
    background-color: ${({ theme }) => `${theme.colors.black}bf`};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      max-width: 28rem;
      padding: 3.75rem 4.25rem 2.5rem;
    }
  `,
  MutedLink: styled.div`
    color: ${({ theme }) => theme.colors.dim_gray};
    margin-top: 1.5rem;

    & a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.white};

      &:hover {
        text-decoration: underline;
      }
    }
  `,
};

export default Styles;
