import React, { createContext } from "react"
import { ChangeNotifier } from "./change_notifier";
import { Action, State } from "./change_notifier_util_type";

/** 
 * A: Action
 * 
 * Action consist of Query and Command.
 * 
 * Query reads state from store.
 * 
 * Command updates state in store.
 * 
 * Builder returns function Context => ReactNode.
 * 
 * Use this Context to pass Reducer and Selector to children.
 * */
type Builder<A> = {
    (action: React.Context<A>,children?:React.ReactNode): React.ReactNode
}

/**
 *  S: State 
 * 
 *  A: Action reads and updates State 
 * 
 * Create should be a function which returns Store which extends ChangeNotifier<S>
 * */
type Create<S extends State,A extends Action<S>> = {
    (): ChangeNotifier<S,A>
}

interface IProps<S,A extends Action<S>> {
    create: Create<S,A>
    builder: Builder<A>
}
interface IComponentState<S extends State,A extends Action<State>> {
    store: ChangeNotifier<S, A>
    rebuildFlag: any
}

export class ChangeNotifierProvider<S, A> extends React.Component<IProps<S,A>, IComponentState<S,A>> {
    
    constructor(props) {
        super(props)
        this.state = {
            store: this.props.create(),
            rebuildFlag: null
        }
    }

    componentDidMount() {
        const subscriber = (value: State) => {
            this.setState({rebuildFlag:value})
        }
        this.state.store.addCallback(subscriber)
    }

    componentWillUnmount() {
        this.state.store.dispose()
    }

    render() {
        const Ctx = createContext<A>(this.state.store.actions)
        return (
            <Ctx.Provider value={this.state.store.actions}>
                    {this.props.builder(Ctx,this.props.children)}
            </Ctx.Provider>
        )
    }
}