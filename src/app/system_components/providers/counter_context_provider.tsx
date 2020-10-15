import React,{useState} from "react"
import { CounterContext } from "../../data/context/counter_context";

interface IProps {
}

export const CounterContextProvider:React.FC<IProps> = props => {
    const [counter, incrimentCounter] = useState(0);
  
 
    return (
      <CounterContext.Provider
        value={{
            counter: counter,
            incrimentCounter:()=>incrimentCounter(prev=>prev+1)
        }}
      >
        {props.children}
      </CounterContext.Provider>
    );
  };