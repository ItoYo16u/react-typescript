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
        <a
          href="http://example.com" 
          css={css`
          text-decoration:none;
          display: block;
          cursor: pointer;
          padding: 16px;
          border-radius: 8px;
          max-width: 300px;
          background-color: #FFF;
          box-shadow: 0 2px 4px rgba(67,133,187,.07);
          text-align: left;
          transition: 0.3s;
          &:hover {
              background-color: rgba(100,100,100,0.1);
              box-shadow: 0 4px 6px rgba(67,133,187,.07);
          }
          &:visited {
            color: inherit;
          }
        `}>
            <Title>title</Title>
            <Caption>lorem ipsum dolor hogehoge</Caption>

        </a>
    )
}