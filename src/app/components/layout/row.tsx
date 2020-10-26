/** @jsx jsx */
import * as React from "react";
import { css, jsx } from "@emotion/core";

interface IProps {
  spacing?: number;
  align?: Align,
}

export enum Align {
  right = "flex-end",
  left = "flex-start",
  center = "center"
}

export const Row: React.FC<IProps> = ({ children, spacing,align }) => {
  return (
    <div
      css={css`
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content:${align??Align.left};
  
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
