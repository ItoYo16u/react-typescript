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

/**
 * - ChangeNotifier を継承したstoreからstateを参照するためにつかう
 * - React.FCからStoreのシングルトンを参照し、setStateを登録するために使う
 *
 */
export type Selector<S extends State, T> = {
  (state: S): T
};