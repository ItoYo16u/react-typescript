
import { Action, State } from "./change_notifier_util_type"

interface IChangeNotifier<A extends Action<State>> {
    actions: A
}

type Selector<S extends State,T> = {
    (state:S):T
}




/**
 * 
 * ChangeNotifier broadcasts `state:State` to subscribers by `reduce` method. 
 * 
 * Subclass of this must be a `singleton`
 * 
 */
export abstract class ChangeNotifier<S extends State,A extends Action<S>> implements IChangeNotifier<A>{

    constructor(state:S) {
        this.state = state;
    }


    private state: S
    private callbacks: Array<(val: S) => void> = []
    /**
     * 
     * @param callback 
     * 
     * add a callback function
     */
    public addSubscriber = (callback: (val: S) => void) => {
        this.callbacks.push(callback);
    };


    public selectState = <T>(selector:Selector<S,T>) => {
        const _partialState = selector(this.state)
        return _partialState;
    }
    /**
     * remove all callback functions
     */
    public dispose = () => {
        this.callbacks = [];
    }


   /** 
    * @param callback
    * 
    * remove a specific callback function
    */
    public removeSubscriber = (callback: (val: S) => void) => {
        this.callbacks = this.callbacks.filter(cb => cb !== callback);
    };

    public reduce = (state: S) => {
        this.state = state;
        this.broadcast();
    };

    private broadcast = () => {
        this.callbacks.forEach(callback => {
            callback(this.state);
        });
    }
    /**implement `actions:A` to access `state:State` */
    abstract actions:A
}