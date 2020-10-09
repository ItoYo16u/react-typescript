import * as React from "react";
import { CountStore} from "../data/store/count_store";

export function build_counter_context<T>(initialVal: T){
    const store = new CountStore<T>(initialVal);

    const MyContext:React.Context<any> = React.createContext(initialVal);
    return {
        /**
         * withConsumerにコンポーネントを渡すと,そのコンポーネントをConsumerで包んで返す.
         * Consumerはstore(正確にはstate)が更新されるとchildrenをリビルドする.
         * globalにMyContextを公開しないため
         * */
        withConsumer: <OuterProps extends {}>(
            WrappedComponent: React.ComponentType<OuterProps>
        )=>{
            return class Consumer extends React.Component<any,{}>{
                public render() {
                    return (
                        <MyContext.Consumer>
                            {ctx => <WrappedComponent {...this.props} {...ctx} />}
                        </MyContext.Consumer>
                    );
                }
            }
        },
        // provider
        // stateのwrite/updateのために使う.
        Provider: class Provider extends React.Component<{},T>{
            constructor(props: {}){
                super(props);
                // このstateは状態管理ではなくリビルドのためのkey.
                this.state = initialVal;
            }

            public componentWillMount() {
                store.subscribe(this.subscribeCounter);
            }

            public componentWillUnmount(){
                store.unsubscribe(this.subscribeCounter);
            }

            public render() {
                return (
                    <MyContext.Provider value= {this.state}>
                      {this.props.children}
                    </MyContext.Provider>
                )
            }

            private subscribeCounter = (val: T)=> {
                this.setState(val);
            }
        },
        // query
        getState: store.getState,
        // update command
        reduce: store.reduce,
    }
}