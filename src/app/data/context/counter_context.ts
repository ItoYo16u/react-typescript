import {createContext} from "react";
interface ICounterContext {
    counter: number
    incrimentCounter: ()=>void
}
export const CounterContext = createContext({
    counter: 0,
    incrimentCounter:()=>{},
});