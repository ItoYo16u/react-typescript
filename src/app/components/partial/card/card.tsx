/** @jsx jsx */
import * as React from "react"
import { css, jsx } from '@emotion/core'
import { CanvasColor, ColorTheme } from "../../../view/helper/color_helper"
import { EdgeInsets } from "../../../view/helper/layout_helper"
import { IItemStoreState, ItemStore } from "../../../data/store/item_store"
import { ISubscriber } from "../../../util/change_notifier"

interface Props {
    url: string,
    backgroundColor?:string
}

export const Card: React.FC<Props> = ({ children, url, backgroundColor }) => {
    const store = ItemStore.instance([]);

    const [itemCount, setCount] = React.useState<number>();
    React.useEffect(() => {
        const subscriber: ISubscriber<IItemStoreState, typeof itemCount> = {
            selector: (state) => state.items.length,
            setStateCallback: setCount
        }
        store.addSubscriber(subscriber)
        return () => store.removeSubscriber(subscriber);
    })
    
    return (
        <a
          href={url} 
          css={css`
          text-decoration:none;
          display: block;
          cursor: pointer;
          padding: ${EdgeInsets.VerticalSm}px ${EdgeInsets.HorizontalSm}px;
          border-radius: 8px;
          background-color: ${backgroundColor??CanvasColor.PaperPrimary};
          box-shadow: 0 2px 4px ${ColorTheme.PaleShadow};
          text-align: left;
          transition: 0.3s;
          &:hover {
              transform: scale(1.02);
              opacity: 0.8;
              box-shadow: 0 4px 6px ${ColorTheme.PaleShadow};
          }
          &:visited {
            color: inherit;
          }
        `}>{itemCount}
            {children}

        </a>
    )
}