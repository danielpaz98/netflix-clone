import styled from "@emotion/styled";

const Styles = {
  ListItem: styled.li`
    font-size: 0.8125rem;
    padding: 0.3125rem 0.625rem;
    color: ${({ theme }) => theme.colors.whisper};

    &,
    & > a {
      display: flex;
      align-items: center;
      gap: 0.625rem;
    }

    & > button:hover,
    & > a:hover {
      text-decoration: underline;
    }
  `,
};

export default Styles;
