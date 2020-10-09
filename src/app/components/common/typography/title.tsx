/** @jsx jsx */
import * as React from "react";
import {css,jsx} from "@emotion/core";
interface IProps {
    fontSize?: number
}

export const Title: React.FC<IProps> =({children,fontSize}) => {
    return (
     <h1 css={css`
       font-weight: bold;
       font-size: ${fontSize??24}px;
       padding:4px 0px;
     `}>
         {children}
     </h1>
    );
}