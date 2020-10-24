/**@jsx jsx */
import * as React from "react"
import {css,jsx} from "@emotion/core"
import { FontSize, TypographyColorTheme } from "../../../view/helper/typography_helper"

export const Caption:React.FC = ({children}) => {
  return (
      <p css={css`
        font-size:${FontSize.Small};
        color: ${TypographyColorTheme.Caption};
      `}>
          {children}
      </p>
  )
}