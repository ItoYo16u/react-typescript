// 状態管理層
// context apiが持つ状態を反映する
export class CountStore<T> {
  private state: T;
  private callbacks: Array<(val: T)=>void> = [];

  constructor(state: T) {
      this.state = state;
  }

  public subscribe = (callback: (val: T)=> void)=>{
    // 状態管理層を監視するリスナーを登録する
    this.callbacks.push(callback);
    };
    public unsubscribe = (callback: (val: T)=> void) => {
        this.callbacks = this.callbacks.filter(_callback => _callback !== callback);
    };
    public getState = () => this.state;

    public reduce = (state: T)=> {
        // 状態の更新
        this.state = state;
        this.notify(this.state);
    }

    // listenersに通知する
    private notify = (val: T)=> {
        this.callbacks.forEach(_callback=>{
            _callback(val);
        });
    }
}