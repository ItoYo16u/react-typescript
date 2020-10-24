/** @jsx jsx */
import * as React from "react"
import {css,jsx} from "@emotion/core"
import { CanvasColor, ColorTheme } from "../../view/helper/color_helper"
import { EdgeInsets } from "../../view/helper/layout_helper"

type CloseCallback = {
  ():void
}
interface IProps {
  callback:CloseCallback,
  children?: (toggle:CloseCallback)=>React.ReactNode
}
interface PanelProps {
}
const Panel: React.FC<PanelProps> = ({  children }) => {
  return (
    <div css={css`
    padding: ${EdgeInsets.VerticalMd}px ${EdgeInsets.HorizontalMd}px;
    background-color: ${CanvasColor.PaperPrimary};
    opacity: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    -webkit- transform: translateY(-50%) translateX(-50%);
  `}>
      {children}
    </div>
  )
}
export const Modal: React.FC<IProps> = ({ callback,children }) => {

  return (
    <div css={css`
      display: "isBlock";
      z-index: 9999;
      position: absolute;
      left:0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: ${ColorTheme.BackGroundOpaque};
    `}
      onClick={() => callback()}>
      <Panel>
        {children(callback)}
        </Panel>
    </div>
  )
}

