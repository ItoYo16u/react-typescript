/** @jsx jsx */
import * as React from "react";
import { css, jsx } from "@emotion/core";

interface IProps {
  width?: string;
  spacing?: number;
}

export const Column: React.FC<IProps> = ({ children, width, spacing }) => {
  return (
    <div
      css={css`
        display: flex;
        display: -ms-flexbox;
        width: ${width ?? "100%"};
        flex-direction: column;
        justify-content: space-between;
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
