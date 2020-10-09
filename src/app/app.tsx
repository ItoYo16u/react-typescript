import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from './components/common/button';

const App: React.FC<{ compiler: string, framework: string }> = (props) => {

  const [count,setCount] = useState(0);
  return (
    <div>
      <div>{props.compiler}</div>
      <div>{props.framework}</div>
      <p>{count}</p>
       <Button onTap={()=>setCount(prevCount=>prevCount + 1)} label={"Ok"} />
    </div>
  );
}

ReactDOM.render(
  <App compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);