import styled from "@emotion/styled";
import { css } from "@emotion/react";
// COMPONENTS
import ProfilePicture from "~/components/ProfilePicture";

const Styles = {
  Dropdown: styled.div`
    --offsetTop: 1.2rem;
    --calloutArrowSize: 7px;
    position: relative;
    display: block;

    &:hover > button > span {
      transform: rotate(180deg);
    }
  `,
  DropdownTrigger: styled.button`
    cursor: pointer;
    display: flex;
    gap: 0.625rem;
  `,
  DropdownContainer: styled.div`
    position: absolute;
    right: 0;
    animation: animate-popup 150ms ease-in;

    & > div {
      margin-top: var(--offsetTop);
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
  ProfilePicture: styled(ProfilePicture)<{ showCalloutArrow?: boolean }>`
    position: relative;
    width: 2rem;
    height: 2rem;

    ${({ showCalloutArrow, theme }) =>
      showCalloutArrow &&
      css`
        &::before {
          content: "";
          border: var(--calloutArrowSize) solid transparent;
          border-bottom-color: ${theme.colors.white};
          position: absolute;
          left: 50%;
          top: calc(100% + (var(--offsetTop) - (var(--calloutArrowSize) * 2)));
          transform: translateX(-50%);
        }
      `}
  `,
  ProfileName: styled.span`
    text-transform: capitalize;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre;
  `,
  Caret: styled.span`
    display: block;
    border-color: ${({ theme }) => theme.colors.white} transparent transparent;
    border-style: solid;
    border-width: 5px 5px 0;
    align-self: center;
    transition: transform 367ms cubic-bezier(0.21, 0, 0.07, 1);

    @media screen and (max-width: 950px) {
      display: none;
    }
  `,
};

export default Styles;
