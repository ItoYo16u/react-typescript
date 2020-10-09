/** @jsx jsx */
import * as React from "react";
import {css, jsx} from "@emotion/core"

interface IProps {
    children: React.FC[]
}

export const Row : React.FC<IProps> = (props)=> {
    
    return <div css={css`
      display: flex;
      flex-direction: row;
    `}>
        {props.children.map(child => <div css={css`
          
        `}
        >child</div>)}
    </div>
}