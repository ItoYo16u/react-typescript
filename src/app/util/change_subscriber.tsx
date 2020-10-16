import * as React from "react"
import { Action } from "./change_notifier_util_type"

interface IProps {
  Ctx: <S,A extends Action<S>>()=>React.Context<A>
}

export const ChangeSubscriber:React.FC<IProps> = ({Ctx,children}) => {
  const actions = React.useContext(Ctx())
  return (
    <>{children}</>
  )
}