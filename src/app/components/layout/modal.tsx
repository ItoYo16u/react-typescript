/** @jsx jsx */
import * as React from "react";
import { css, jsx } from "@emotion/core";
import { CanvasColor, ColorTheme } from "../../view/helper/color_helper";
import { EdgeInsets } from "../../view/helper/layout_helper";
import { Portal } from "./portal";
import { BorderRadius } from "../../view/helper/style_helper";

type CloseCallback = {
  (): void;
};
interface IProps {
  callback: CloseCallback;
  children?: (close: CloseCallback) => React.ReactNode;
}
interface PanelProps {}
const Panel: React.FC<PanelProps> = ({ children }) => {
  const [offset, setOffset] = React.useState(0.2);
  const [opacity, setOpacity] = React.useState(0);

  React.useEffect(() => {
    const opacityInterval = setInterval(() => {
      if (opacity > 1) {
        clearInterval(opacityInterval);
        return;
      }
      setOpacity(opacity + 0.2);
    }, 100);
    const offsetInterval = setInterval(() => {
      if (offset < 0) {
        clearInterval(offsetInterval);
        return;
      }
      setOffset(offset - 0.05);
    }, 100);
    const clear = () => { clearInterval(opacityInterval);clearInterval(offsetInterval);}
    return clear
  },[opacity,offset])

  return (
    <div
      css={css`
    z-index: 9999;
    padding: ${EdgeInsets.VerticalMd}px ${EdgeInsets.HorizontalMd}px;
    background-color: ${CanvasColor.PaperPrimary};
    border-radius: ${BorderRadius.Small};
    opacity: ${opacity};
    position: absolute;
    top: ${50 + offset}%;
    box-shadow: 2px 4px 6px ${ColorTheme.Shadow};
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    -webkit- transform: translateY(-50%) translateX(-50%);
  `}
    >
      {children}
    </div>
  );
};
export const Modal: React.FC<IProps> = ({ callback, children }) => {
  return (
    <Portal>
      <div
        css={css`
          display: "isBlock";
          z-index: 9998;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: ${ColorTheme.BackGroundOpaque};
        `}
        onClick={() => callback()}
      >
        <Panel>{children(callback)}</Panel>
      </div>
    </Portal>
  );
};
