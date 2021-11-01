/** @jsxRuntime classic */
/** @jsx jsx */

import { css } from "@emotion/react";

export const ImageStyled = css`
  display: block;
  width: 200px;
  margin: 0 auto;
  text-align: center;
  border-radius: 50%;
  box-shadow: 3px 3px 6px 2px rgba(220, 220, 220, 0.4);

  @media screen and (max-width: 768px) {
    width: 140px;
  }
`;
