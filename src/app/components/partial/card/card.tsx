/** @jsx jsx */
import * as React from "react"
import { css, jsx } from '@emotion/core'

interface Props {
    title: string
    description?: string
    url: string
}

export const Card: React.FC<Props> = (props)=>{
    
    return (
        <div css={css`
          padding: 16px;
          border-radius: 8px;
          max-width: 300px;
          background-color: #FFF;
          box-shadow: 0 2px 4px rgba(67,133,187,.07);
        `}>
            {props.title}

        </div>
    )
}