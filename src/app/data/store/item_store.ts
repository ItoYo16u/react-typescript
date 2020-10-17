import { Item } from "../../domain/model/item";
import { ChangeNotifier } from "../../util/change_notifier";
import { Action, State } from "../../util/change_notifier_util_type";

export interface IItemStoreState extends State {
  items: Item[];
}
interface IItemStoreAction extends Action<State> {
  get: () => Item[];
  add: (item: Item) => void;
}
/**
 * @singleton
 *
 * ItemStore は item の状態を管理する シングルトン
 *  */
export class ItemStore extends ChangeNotifier<
  IItemStoreState,
  IItemStoreAction
> {
  private static _instance: ItemStore;

  private constructor(items: Item[]) {
    super({ items: items });
  }

  public static instance(items: Item[]): ItemStore {
    if (!this._instance) {
      this._instance = new ItemStore(items);
    }
    return this._instance;
  }
  private get: () => Item[] = () => {
    const selector = (s: IItemStoreState) => s.items;
    return this.selectState<Item[]>(selector);
  };

  private add = (item: Item) => {
    const updated: Item[] = this.selectState((s) => s.items).concat(item);
    this.reduce({ items: updated });
  };

  public actions: IItemStoreAction = { get: this.get, add: this.add };
}
