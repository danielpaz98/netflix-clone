// PLUGINS
import { css } from "@emotion/react";

export const aspectRatio = (width: number, height: number) => {
  return css`
    aspect-ratio: ${width} / ${height};

    @supports not (aspect-ratio: ${width} / ${height}) {
      &::before {
        float: left;
        padding-top: calc(${height} / ${width} * 100%);
        content: "";
      }

      &::after {
        display: block;
        content: "";
        clear: both;
      }
    }
  `;
};
