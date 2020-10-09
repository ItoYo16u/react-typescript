/**@jsx jsx */
import * as React from "react"
import { css, jsx } from "@emotion/core"

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
          border-radius: ${props.size / 2}px;
          background-color: #bdbdbd;
          box-shadow: 0 2px 4px rgba(67,133,187,.07);
        `}>
        </img>
    </a>
    )
}