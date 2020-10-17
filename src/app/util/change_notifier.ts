import React, { SetStateAction } from "react";
import { Action, State,Selector } from "./change_notifier_util_type";
/** サブクラスでactions propertyの定義を強制する */
interface IChangeNotifier<A extends Action<State>> {
  actions: A;
}

export interface ISubscriber<S extends State, T extends any> {
  selector: Selector<S, T>
  setStateCallback: React.Dispatch<React.SetStateAction<T>>
}

/**
 *
 * ChangeNotifier broadcasts `state:State` to subscribers by `reduce` method.
 *
 * Subclass of this must be a `singleton`
 *
 */
export abstract class ChangeNotifier<S extends State, A extends Action<S>> implements IChangeNotifier<A> {
  constructor(state: S) {
    this.state = state;
  }
    
    private state: S;
  private callbacks: Array<(val: S) => void> = [];
  private subscribers: Array<ISubscriber<S, any>> = [];

  /**
   *
   * @param callback
   *
   * add a callback function
   */
  public readonly addCallback = (callback: (val: S) => void) => {
    this.callbacks.push(callback);
  };

    public readonly addSubscriber = <T>(s: ISubscriber<S, T>) => {
        if (this.subscribers.includes(s)) {
            console.warn("[WARN] this subscriber is already registered.")
          return
        } else {
            this.subscribers.push(s);
            s.setStateCallback(s.selector(this.state))
      }
    };
    public readonly removeSubscriber = <T>(callback:ISubscriber<S,T>) => {
        this.subscribers = this.subscribers.filter(e=>e!==callback)
    }

  private notifySubscribers = () => {
    this.subscribers.forEach((s) => {
      s.setStateCallback(s.selector(this.state));
    });
  };

  public readonly selectState = <T>(selector: Selector<S, T>) => {
    const _partialState = selector(this.state);
    return _partialState;
  };
  /**
   * remove all callback functions
   */
  public readonly dispose = () => {
      this.callbacks = [];
      this.subscribers = [];
  };

  /**
   * @param callback
   *
   * remove a specific callback function
   */
  public readonly removeCallback = (callback: (val: S) => void) => {
    this.callbacks = this.callbacks.filter((cb) => cb !== callback);
  };

  public readonly reduce = (state: S) => {
    this.state = state;
      this.broadcast();
      this.notifySubscribers();
  };

  private broadcast = () => {
    this.callbacks.forEach((callback) => {
      callback(this.state);
    });
  };
  /**
   * implement `actions:A` to access `state:State`
   *
   * - read state: use selectState(selector)
   *
   * - update state, use `reduce(state)` method
   * */
    abstract actions: A;
    
}
