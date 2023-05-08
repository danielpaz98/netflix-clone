import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Styles = {
  Figure: styled.figure`
    display: block;
    margin: 0;
    max-width: 12.5rem;
    height: 8.25rem;
    width: 8.25rem;
  `,
  Picture: styled.picture<{ onlyPicture?: boolean }>`
    position: relative;
    display: block;
    background-color: ${({ theme }) => theme.colors.night_rider};
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
    width: 100%;

    ${({ onlyPicture }) =>
      onlyPicture &&
      css`
        &::after {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border-radius: 4px;
          border: 2px solid transparent;
        }
      `}
  `,
  Text: styled.figcaption`
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.mischka};
    display: block;
    line-height: 1.2em;
    margin: 0.6em 0;
    min-height: 1.8em;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
  `,
};

export default Styles;
