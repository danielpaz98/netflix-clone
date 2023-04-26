import styled from "styled-components";

const Styles = {
  ProviderListItem: styled.li`
    display: inline-block;

    & button {
      cursor: pointer;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.white};
      border: none;
      display: grid;
      place-items: center;
    }
  `,
};

export default Styles;
