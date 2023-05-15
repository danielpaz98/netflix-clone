import styled from "@emotion/styled";

const Styles = {
  MenuItem: styled.li`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.whisper};

    &.active > a {
      cursor: default;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.white};
    }

    &:not(.active) > a:hover {
      color: ${({ theme }) => theme.colors.gray_70};
      transition: color 0.4s;
    }
  `,
};

export default Styles;
