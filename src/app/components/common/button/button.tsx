/** @jsx jsx */
import React from "react";
import { css, jsx } from '@emotion/core'

interface Props {
  label: string
  onTap: ()=>void
}

export const Button: React.FC<Props> = ({label,onTap})=> {

    const color = 'white'

    return  <button
    css={css`
      padding: 8px 16px;
      background-color: transparent;
      font-size: 16px;
      border-radius: 24px;
      min-width: 100px;
      cursor: pointer;
      color: #bdbdbd;
      border: 1.6px solid #bdbdbd;
      transition: 0.3s;
      box-shadow: 0 2px 4px rgba(67,133,187,.07);
      &:hover {
        background-color: rgba(100,100,100,0.1);
        box-shadow: 0 4px 6px rgba(67,133,187,.07);
    }
    `}
    onClick={onTap}
  >
    {label}
  </button>
}