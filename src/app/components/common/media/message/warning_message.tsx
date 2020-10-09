/** @jsx jsx */
import * as React from "react"
import { css, jsx } from "@emotion/core"

interface IProps {
}

export const WarningMessage: React.FC<IProps> = ({children}) => {
  const [open, setOpen] = React.useState(true);
  return (
    <div
      onClick={()=>setOpen(false)}
      css={css`
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(67,133,187,.07);
      min-height: 30px;
      min-width: 100px;
      cursor: pointer;
      color: #FFF;
      display: ${open ? "block" : "none"};
      padding: 8px;
      transition: 0.3s;
      background-color: rgba(176, 40, 40,0.8);
      :hover {
        background-color: rgba(176, 40, 40,0.5);
      }
    `}>
      <ul>
        {React.Children.map(children, (child) => <li>{child}</li>)}
      </ul>
    </div>
  )
}