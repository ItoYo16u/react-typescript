/** @jsx jsx */
import * as React from "react";
import {css,jsx} from "@emotion/core";
import { FontSize, TypographyColorTheme } from "../../../view/helper/typography_helper";
interface IProps {
    fontColor?: string // #bababa, rgba(55,55,55,0.5),
}

export const PlainText: React.FC<IProps> =({children,fontColor}) => {
    return (
     <p css={css`
       font-weight: normal;
       font-size: ${FontSize.Medium};
       color: ${fontColor??TypographyColorTheme.Plain};
     `}>
         {children}
     </p>
    );
}
