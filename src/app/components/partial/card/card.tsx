/** @jsx jsx */
import * as React from "react"
import { css, jsx } from '@emotion/core'
import { Title } from "../../common/typography/title"
import { Caption } from "../../common/typography/caption"

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
          text-align: left;
        `}>
            <Title>title</Title>
            <Caption>lorem ipsum dolor hogehoge</Caption>

        </div>
    )
}