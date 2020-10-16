import React, { createContext, useEffect, useState } from "react"
import { IItemStoreAction, IItemStoreState, ItemStore } from "../../data/store/item_store"
import { Item } from "../../domain/model/item";

type Builder = {
    <T>(ctx: React.Context<T>): any
}

interface IProps {
    initialItems?: Item[]
    builder: Builder
}

export const ItemContextProvider: React.FC<IProps> = ({ initialItems, builder }) => {
    // TODO storeをシングルトンにする
    const store = new ItemStore(initialItems ?? [])
    const [_, setItems] = useState([]);
    const listener = (value: IItemStoreState) => {
        setItems(value.items)
    }
    const Ctx: React.Context<IItemStoreAction> = createContext<IItemStoreAction>({ get: store.get, add: store.add });
    useEffect(() => {
        store.subscribe(listener)
    })

    return (<Ctx.Provider value={
        { get: store.get, add: store.add }
    }>
        {builder(Ctx)}
    </Ctx.Provider>
    );
};