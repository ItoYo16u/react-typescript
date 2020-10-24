/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { css, jsx } from "@emotion/core";
import { FontSize } from "../../../view/helper/typography_helper";
import {
  ButtonColorTheme,
  ColorTheme,
} from "../../../view/helper/color_helper";
import { ButtonStyleTheme } from "../../../view/helper/style_helper";

interface Props {
  label: string;
  isRounded?: boolean;
  isFilled?: boolean;
  onTap: () => void;
}

export const Button: React.FC<Props> = ({ label, isRounded,isFilled, onTap }) => {
  return (
    <button
      css={css`
        padding: 12px 16px;
        background-color: ${isFilled? ColorTheme.Primary:"transparent"};
        font-size: ${FontSize.Medium};
        border-radius: ${isRounded
          ? ButtonStyleTheme.ButtonBorderRadius
          : "0px"};
        min-width: 100px;
        cursor: pointer;
        outline: none;
        color: ${isFilled? ButtonColorTheme.FilledButtonTextColor: ButtonColorTheme.OutLinedButtonTextColor};
        border: 1.6px solid ${ButtonColorTheme.ActiveColor};
        transition: 0.3s;
        box-shadow: 0 2px 4px ${ColorTheme.Shadow};
        &:hover {
          color: ${isFilled? ButtonColorTheme.ActiveColor : ButtonColorTheme.OutLinedButtonTextColor};
          background-color: rgba(100, 100, 100, 0.1);
          box-shadow: 0 4px 6px ${ColorTheme.Shadow};
        }
      `}
      onClick={onTap}
    >
      {label}
    </button>
  );
};
