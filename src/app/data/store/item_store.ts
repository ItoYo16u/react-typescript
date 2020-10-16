import React, { createContext } from "react"
import { Item } from "../../domain/model/item"
import { ChangeNotiier } from "../../util/change_notifier"
/** ItemStore は item の状態を管理する  */
export interface IItemStoreState {
  items: Item[]
}
export class ItemStore extends ChangeNotiier<IItemStoreState>{
    
    constructor(items:Item[]){
        super({items: items})
    }

    get:()=>Item[]=()=>this.state.items

    add=(item:Item)=>{
        console.log("add");
        console.log(this.state.items.length);
        const updated: Item[] = this.state.items.concat(item)
        this.reduce({items: updated})
    }
}
export interface IItemStoreAction {
    get:()=>Item[]
    add:(item:Item)=>void
}