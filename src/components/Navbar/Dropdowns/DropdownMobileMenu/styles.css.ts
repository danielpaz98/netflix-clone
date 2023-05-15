import styled from "@emotion/styled";

const Styles = {
  Dropdown: styled.div`
    position: relative;
    display: block;
  `,
  DropdownTrigger: styled.button`
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${({ theme }) => theme.colors.white};

    &::after {
      content: "";
      border-color: ${({ theme }) => theme.colors.white} transparent;
      border-style: solid;
      border-width: 5px 5px 0;
    }
  `,
  DropdownContainer: styled.div`
    --offsetTop: 2.5rem;
    position: absolute;
    left: 90%;
    transform: translateX(-50%);
    animation: animate-popup 150ms ease-in;

    & > div {
      margin-top: var(--offsetTop);
      border-top: 2px solid ${({ theme }) => theme.colors.whisper};
    }

    &::before {
      content: "";
      border: 7px solid transparent;
      border-bottom-color: ${({ theme }) => theme.colors.white};
      position: absolute;
      bottom: calc(100% - var(--offsetTop));
      left: 50%;
      transform: translateX(-50%);
    }

    @keyframes animate-popup {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  `,
};

export default Styles;
