/** 
 * base type for State 
 * 
 * Any State used by change notifier must belong to this.
 * 
 * */
export type State = {}
/**
 *  Action
 * */
export type Action<S extends State> = {}