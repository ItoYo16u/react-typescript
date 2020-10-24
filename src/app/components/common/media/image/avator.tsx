/**@jsx jsx */
import * as React from "react"
import { css, jsx } from "@emotion/core"
import { ColorTheme } from "../../../../view/helper/color_helper"

interface IProps {
    imagePath?: string
    size: number
    link: string
}

export const Avator: React.FC<IProps> = (props) => {

    return (
    <a href={props.link}>
        <img 
        src={props.imagePath} 
        width={props.size} 
        height={props.size} 
                css={css`
          margin: auto;
          border-radius: ${props.size / 2}px;
          background-color: ${ColorTheme.Disabled};
          box-shadow: 0 2px 4px ${ColorTheme.Shadow};
        `}>
        </img>
    </a>
    )
}