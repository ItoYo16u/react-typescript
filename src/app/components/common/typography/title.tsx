/** @jsx jsx */
import * as React from "react";
import {css,jsx} from "@emotion/core";
import { FontSize } from "../../../view/helper/typography_helper";
interface IProps {
    fontSize?: number
}

export const Title: React.FC<IProps> =({children,fontSize}) => {
    return (
     <h1 css={css`
       font-weight: bold;
       font-size: ${fontSize ?? FontSize.Large}px;
       margin: 12px 0px;
       padding:4px 0px;
     `}>
         {children}
     </h1>
    );
}