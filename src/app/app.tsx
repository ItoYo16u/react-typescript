import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from './components/common/button/button';
import { Avator } from './components/common/media/image/avator';
import { Card } from './components/partial/card/card';

const App: React.FC<{ compiler: string, framework: string }> = (props) => {

  const [count,setCount] = useState(0);
  return (
    <div>
      <div>{props.compiler}</div>
      <div>{props.framework}</div>
      <p>{count}</p>
      <Card title={"hello"} url={"http://example.com"}></Card>
      <Avator link="http://example.com" size={32}></Avator>
       <Button onTap={()=>setCount(prevCount=>prevCount + 1)} label={"Ok"} />
    </div>
  );
}

ReactDOM.render(
  <App compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);