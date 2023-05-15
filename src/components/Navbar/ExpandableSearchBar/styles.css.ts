import styled from "@emotion/styled";
// ICONS
import SearchIcon from "~/icons/search.svg";

const Styles = {
  SearchBox: styled.div`
    display: inline-block;
    vertical-align: middle;
  `,
  SearchTab: styled.button`
    &:focus {
      transform: scale(1.2);
    }
  `,
  SearchIcon: styled(SearchIcon)`
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    flex-shrink: 0;
  `,
  SearchInput: styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => `${theme.colors.black}bf`};
    border: 1px solid hsla(0, 0%, 100%, 0.85);
    --input-width: 13.25rem;
  `,
  Input: styled.input`
    background: transparent;
    border: none;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.white};
    display: inline-block;
    font-size: 0.875rem;
    height: 2.125rem;
    line-height: 2.125rem;
    outline: none;
    padding: 0.4375rem 0.875rem 0.4375rem 0.4375rem;
    width: var(--input-width);
    animation: expand-search 300ms;

    @keyframes expand-search {
      from {
        width: 0;
        opacity: 0;
      }

      to {
        width: var(--input-width);
        opacity: 1;
      }
    }
  `,
  ClearButton: styled.button`
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
  `,
};

export default Styles;
