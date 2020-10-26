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
  const [animationTick, setAnimationTick] = React.useState(0);
  const [styleState, setStyleState] = React.useState({
    offset: 8,
    opacity: 0,
  });

  React.useEffect(() => {
    const tick = setInterval(() => {
      setAnimationTick((prevTick) => {
        const next = prevTick + 0.01;
        if (next > 1) {
          clearInterval(tick);
        }
        setStyleState((prevStyle) => {
          return {
            ...prevStyle,
            opacity: prevStyle.opacity + 0.01,
            offset: prevStyle.offset - 0.015,
          };
        });
        return next;
      });
    }, 1);

    const clear = () => clearInterval(tick);
    return clear;
  }, []);
  const curve = (n: number) => n**4;

  return (
    <div
      css={css`
    z-index: 9999;
    padding: ${EdgeInsets.VerticalMd}px ${EdgeInsets.HorizontalMd}px;
    background-color: ${CanvasColor.PaperPrimary};
    border-radius: ${BorderRadius.Small};
    opacity: ${styleState.opacity};
    position: absolute;
    top: ${45 + styleState.offset}%;
    box-shadow: 2px 4px 6px ${ColorTheme.Shadow};
    min-width: 240px;
    left: 50%;
    transform: translateY(-50%) translateX(-50%) scale(${curve(animationTick)});
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
