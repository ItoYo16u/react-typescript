/** @jsx jsx */
import * as React from "react";
import { jsx, css } from "@emotion/core";
import { EdgeInsets } from "../../view/helper/layout_helper";
import { CanvasColor, ColorTheme, } from "../../view/helper/color_helper";
export const Header: React.FC = ({ children }) => {
  return <div css={css`
    height: 50px;
    padding: ${EdgeInsets.VerticalSm}px ${EdgeInsets.HorizontalMd}px;
    background-color: ${CanvasColor.PaperPrimary};
    box-shadow: 2px 4px 6px ${ColorTheme.Shadow}; 
  `}></div>;
};
