import React, { useEffect, useState } from "react"
import { IItemStoreAction, IItemStoreState, ItemStore } from "../../data/store/item_store"
interface IProps {
    Context: React.Context<IItemStoreAction>
    initialItems?: Item[]
}

export const ItemContextProvider: React.FC<IProps> = ({ Context, initialItems, children }) => {
    const store = new ItemStore(initialItems ?? [])
    const [_, setItems] = useState([]);
    const listeners = (value:IItemStoreState)=> setItems(value.items)
    useEffect(() => {
        store.subscribe(listeners)
        return store.unsubscribe(listeners)
    })

    return (<Context.Provider value={
        { get: store.get, add: store.add }
    }>

    </Context.Provider>
    );
};