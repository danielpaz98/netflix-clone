import styled from "@emotion/styled";

const Styles = {
  Dropdown: styled.div`
    position: relative;
    display: block;
  `,
  DropdownTrigger: styled.button<{ showCalloutArrow?: boolean }>`
    width: 1.5rem;
    height: 1.5rem;
    vertical-align: middle;
    color: ${({ theme }) => theme.colors.white};

    &:focus {
      transform: scale(1.2);
    }
  `,
  DropdownContainer: styled.div`
    --offsetTop: 1.5rem;
    position: absolute;
    right: 0;
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
      right: 0.3125rem;
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
  NotificationPill: styled.span`
    background-color: ${({ theme }) => theme.colors.venetian_red};
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.white};
    display: inline-block;
    font-weight: 500;
    min-width: 1.5em;
    padding: 0.2em;
    font-size: 0.75em;
    text-align: center;
    line-height: 1;
    position: absolute;
    right: -0.5em;
    top: -0.25em;
    z-index: 2;
  `,
};

export default Styles;
