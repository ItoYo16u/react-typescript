/** @jsx jsx */
import * as React from "react"
import { css, jsx } from "@emotion/core"

interface IProps {
  label: string
  backgroundColor?:string
  link?: string
}
export const Tag: React.FC<IProps> = ({children,label,link,backgroundColor }) => {
  return (
    <a
      href={link}
      css={css`
        display: inline-block;
        font-size: 14px;
        padding: 4px 8px;
        min-width: 56px;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(67,133,187,.1);
        border-radius: 16px;
        text-decoration:none;
        color:#FFF;
        text-align:center;
        transition: 0.3s;
        background-color:${backgroundColor ?? "rgba(194, 194, 194,1)"} ;
        :hover {
          opacity: 0.8; 
        }
      `}
    >
      #{label}
    </a>
  )
}