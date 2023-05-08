import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Styles = {
  Container: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    color: ${({ theme }) => theme.colors.suva_gray};
  `,
  Label: styled.label<{ floatLabel: boolean }>`
    font-size: ${({ theme }) => theme.fontSize.base};
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
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    padding: 1rem 1.25rem 0;
    border: none;
    outline: none;

    &:focus {
      background-color: ${({ theme }) => theme.colors.charcoal};
    }

    ${({ floatLabel, theme }) =>
      floatLabel
        ? css`
            padding: 1rem 1.25rem 0;

            &:focus + label,
            &:not(:placeholder-shown) + label {
              font-size: ${theme.fontSize.xs};
              top: 0.75rem;
            }
          `
        : css`
            padding: 1rem 1.25rem;
          `}
  `,
};

export default Styles;
