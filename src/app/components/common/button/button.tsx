/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { css, jsx } from '@emotion/core'
import { IItemStoreState, ItemStore } from "../../../data/store/item_store";
import { ISubscriber } from "../../../util/change_notifier";

interface Props {
  label: string
  isRounded?:boolean
  onTap: ()=>void
}

export const Button: React.FC<Props> = ({label,isRounded,onTap})=> {


    return  <button
    css={css`
      padding: 8px 16px;
      background-color: transparent;
      font-size: 16px;
      border-radius: ${isRounded? "24px":"0px"};
      min-width: 100px;
      cursor: pointer;
      outline: none;
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