/**@jsx jsx */
import * as React from "react"
import {css,jsx} from "@emotion/core"

export const Caption:React.FC = ({children}) => {
  return (
      <p css={css`
        font-size:14px;
        color: rgba(0,0,0,0.8);
      `}>
          {children}
      </p>
  )
}