import React from "react"
/** ItemStore は item の状態を管理する  */
export interface IItemStoreState {
  items: Item[]
}
export class ItemStore extends ChangeNotiier<IItemStoreState>{
    
    constructor(items:Item[]){
        super({items: items})
    }

    get=():Item[]=>this.state.items

    add=(item:Item)=>{
        const updated: Item[] = this.state.items.concat(item)
        this.reduce({items: updated})
    }
}
export interface IItemStoreAction {
    get:()=>Item[]
    add:(item:Item)=>void
}