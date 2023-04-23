import styled, { css } from "styled-components";
// TYPES
import type { Props as InputProps } from "~/components/Input";

const Styles = {
  Container: styled.div<{ errorType?: InputProps["errorType"] }>`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    color: ${({ theme }) => theme.colors.suva_gray};

    ${({ errorType }) =>
      errorType &&
      css`
        &::after {
          content: "";
          display: block;
          border-bottom: 2px solid ${({ theme }) => theme.colors[errorType]};
          border-bottom-left-radius: 0.25rem;
          border-bottom-right-radius: 0.25rem;
          bottom: 0;
          height: 6px;
          left: 0;
          pointer-events: none;
          position: absolute;
          width: 100%;
        }
      `}
  `,
  Label: styled.label<{ floatLabel: boolean }>`
    font-size: 1rem;
    align-self: flex-start;

    ${({ floatLabel }) =>
      floatLabel
        ? css`
            position: absolute;
            left: 20px;
            top: 50%;
            pointer-events: none;
            transform: translateY(-50%);
            transition: font 0.1s ease, top 0.1s ease;
          `
        : css`
            order: -1;
          `}
  `,
  Input: styled.input<{ floatLabel: boolean }>`
    width: 100%;
    height: 3.125rem;
    background-color: ${({ theme }) => theme.colors.night_rider};
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    padding: 1rem 1.25rem 0;
    border: none;
    outline: none;

    &:focus {
      background-color: ${({ theme }) => theme.colors.charcoal};
    }

    ${({ floatLabel }) =>
      floatLabel
        ? css`
            padding: 1rem 1.25rem 0;

            &:focus + label,
            &:not(:placeholder-shown) + label {
              font-size: 0.75rem;
              top: 0.75rem;
            }
          `
        : css`
            padding: 1rem 1.25rem;
          `}
  `,
};

export default Styles;
