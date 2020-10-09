/** @jsx jsx */
import * as React from "react"
import {css,jsx} from "@emotion/core"
interface IProps {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>)=>void
    boderColor?:string
    fontSize?: number
}

export const BaseField : React.FC<IProps>=({children,onChange,boderColor,fontSize})=>{
    return (
        <input
        onChange={onChange}
        css={css`
          padding: 4px;
          border-radius:2px;
          outline: 0;
          min-width: 240px;
          min-height: 32px;
          font-size: ${fontSize??16}px;
          border: 1px solid #bdbdbd;
          &:focus {
            border: 1px solid #00aaaa;
          }
        `}
        >
        </input>
    );
}