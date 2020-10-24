/** @jsx jsx */
import * as React from "react";
import { css, jsx } from "@emotion/core";

interface IProps {
  spacing?: number;
}

export const Row: React.FC<IProps> = ({ children, spacing }) => {
  return (
    <div
      css={css`
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        flex-wrap: wrap;
        flex-direction: row;
      `}
    >
      {React.Children.map(children, (child) => (
        <div
          css={css`
            display: block;
            margin: ${spacing ?? "2px"};
          `}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
