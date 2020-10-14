/** @jsx jsx */

import * as React from "react"
import {css,jsx} from "@emotion/core"

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
      background-color: #f5f5f5;
      border-radius: 4px;
      min-height: 100px;
      padding: 12px;
    `}>

    </textarea>
}