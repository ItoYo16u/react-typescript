import { IItemStoreState } from "../../../data/store/item_store";

export const itemCountSelector = (state: IItemStoreState) => state.items.length

export const allItemSelector = (state:IItemStoreState) => state.items