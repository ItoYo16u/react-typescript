/** @jsx jsx */
import * as React from "react"
import {css,jsx} from "@emotion/core"
import { FontSize } from "../../../view/helper/typography_helper";
import { FieldTheme } from "../../../view/theme/field_theme";
import { CanvasColor } from "../../../view/helper/color_helper";
interface IProps {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>)=>void
    borderColor?:string
    fontSize?: number
}

export const BaseField : React.FC<IProps>=({children,onChange,borderColor,fontSize})=>{
    return (
        <input
        onChange={onChange}
        css={css`
          padding: 4px;
          border-radius:${FieldTheme.FieldBorderRadius};
          outline: 0;
          background-color: ${CanvasColor.Featured};
          min-width: ${FieldTheme.MinWidth};
          min-height: 32px;
          line-height: ${FontSize.LineHeight}px;
          font-size: ${fontSize??FontSize.Medium}px;
          border: 2px solid;
          border-color: ${borderColor??FieldTheme.DefaultBorderColor};
          &:focus {
            border-color:${FieldTheme.FocusedBorderColor};
          }
        `}
        >
        </input>
    );
}