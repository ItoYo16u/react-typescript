import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from './components/common/button/button';
import { BaseField } from './components/common/field/base_field';
import { Avator } from './components/common/media/image/avator';
import { Column } from './components/layout/column';
import { Row } from './components/layout/row';
import { Card } from './components/partial/card/card';

const App: React.FC<{ compiler: string, framework: string }> = (props) => {

  const [count,setCount] = useState(0);
  return (
    <div>
      <div>{props.compiler}</div>
      <div>{props.framework}</div>
      <p>{count}</p>
      <Column width="200px">
        <Card title={"hello"} url={"http://example.com"}></Card>
        <Card title={"hello"} url={"http://example.com"}></Card>
        <Card title={"hello"} url={"http://example.com"}></Card>
        <Card title={"hello"} url={"http://example.com"}></Card>
        </Column>
        <Row>
        <Card title={"hello"} url={"http://example.com"}></Card>
        <Card title={"hello"} url={"http://example.com"}></Card>
        <Card title={"hello"} url={"http://example.com"}></Card>
        <Card title={"hello"} url={"http://example.com"}></Card>
        </Row>
        <BaseField></BaseField>
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