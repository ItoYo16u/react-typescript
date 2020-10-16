/** @jsx jsx */
import * as React from "react";
import {css,jsx} from "@emotion/core";
interface IProps {
    fontColor: string // #bababa, rgba(55,55,55,0.5),
}

export const PlainText: React.FC<IProps> =({children,fontColor}) => {
    return (
     <p css={css`
       font-weight: normal;
       font-size: 16px;
       color: ${fontColor};
     `}>
         {children}
     </p>
    );
}
