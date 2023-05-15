import styled from "@emotion/styled";

const Styles = {
  ListItem: styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.125rem;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.whisper};

    & > a {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.4s;
    }

    & > a:hover {
      background-color: hsla(0, 0%, 100%, 0.05);
    }

    &.active > a {
      cursor: default;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.white};
    }
  `,
};

export default Styles;
