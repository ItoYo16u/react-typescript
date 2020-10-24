/** @jsx jsx */

import * as React from "react"
import {css,jsx} from "@emotion/core"
import { CanvasColor } from "../../../view/helper/color_helper"
import { BorderRadius } from "../../../view/helper/style_helper"

interface IProps {
    onChange?:(event: React.ChangeEvent) => void
}

export const Textarea : React.FC<IProps>=({onChange,children})=>{
    return <textarea 
    onChange={onChange}
    css={css`
      outline:none;
      decoration: none;
      border:none;
      background-color: ${CanvasColor.Featured};
      border-radius: ${BorderRadius.Xs};
      min-height: 100px;
      padding: 12px;
    `}>

    </textarea>
}