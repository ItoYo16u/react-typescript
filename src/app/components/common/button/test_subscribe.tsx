import * as React from "react";
import { IItemStoreState, ItemStore } from "../../../data/store/item_store";

export const TestSubscribe: React.FC = () => {
  const store = ItemStore.instance([]);
  const [x, rebuildWith] = React.useState([]); 
  const subscriber = (state: IItemStoreState) => {
    rebuildWith(state.items)
  }
  React.useEffect(() => {
    // store.subscribe()
    store.addSubscriber(subscriber)
    return ()=>store.removeSubscriber(subscriber)
  })
  return (
    <p>
      {x.length}
    </p>
  )
}