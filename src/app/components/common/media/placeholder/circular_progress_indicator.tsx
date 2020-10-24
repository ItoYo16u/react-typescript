/** @jsx jsx */

import * as React from "react";
import { css, jsx } from "@emotion/core";
import { ColorTheme } from "../../../../view/helper/color_helper";

interface IProps {
  color?: string;
}

export const CircularProgressIndicator: React.FC<IProps> = ({ color }) => {
  return (
    <div
      css={css`
        width: 32px;
        height: 32px;
        margin: 10px auto;
        border: 4px ${ColorTheme.Disabled} solid;
        border-top: 4px ${color ?? ColorTheme.Primary} solid;
        border-radius: 50%;
        animation: sp-anime 1s infinite linear;
        @keyframes sp-anime {
          100% {
            transform: rotate(360deg);
          }
        }
      `}
    ></div>
  );
};
