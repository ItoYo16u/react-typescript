/** @jsx jsx */
import * as React from "react";
import {css,jsx} from "@emotion/core";
interface IProps {
    fontSize?: number
}

export const Subtitle: React.FC<IProps> =({children,fontSize}) => {
    return (
     <h2 css={css`
       font-weight: normal;
       font-size: ${fontSize??18}px;
       color: #555555;
     `}>
         {children}
     </h2>
    );
}