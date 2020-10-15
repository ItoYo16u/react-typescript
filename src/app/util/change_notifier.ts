class ChangeNotiier<T>{
    constructor(state:T){
        this.state = state
    }
    public state: T
    private callbacks: Array<(val: T) => void> = []

    public subscribe = (callback: (val: T) => void) => {
        this.callbacks.push(callback);
    };

    public unsubscribe = (callback: (val: T) => void) => {
        this.callbacks = this.callbacks.filter(cb => cb !== callback);
    };

    public reduce = (state: T) => {
        this.state = state;
        this.notifyListeners();
    };

    private notifyListeners = () => {
        this.callbacks.forEach(callback => {
            callback(this.state);
        });
    }
}