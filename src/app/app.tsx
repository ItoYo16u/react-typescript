/** @jsx jsx */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from './components/common/button/button';
import { BaseField } from './components/common/field/base_field';
import { Subtitle } from './components/common/typography/subtitle';
import { Row } from './components/layout/row';
import { Card } from './components/partial/card/card';
import {css,jsx} from "@emotion/core";
import "normalize.css";

const App: React.FC<{ compiler: string, framework: string }> = (props) => {

  const [count,setCount] = useState(0);
  return (
    <div
    css={css`
      background-color: rgba(247,247,247,1)
    `}
    >
      <Subtitle>{count}</Subtitle>
      <div>{props.compiler}</div>
      <div>{props.framework}</div>
      <p>{count}</p>
        <Row>
        <Card title={"hello"} url={"http://example.com"}></Card>
        <Card title={"hello"} url={"http://example.com"}></Card>
        <Card title={"hello"} url={"http://example.com"}></Card>
        <Card title={"hello"} url={"http://example.com"}></Card>
        </Row>
        <BaseField></BaseField>
       <Button onTap={()=>setCount(prevCount=>prevCount + 1)} label={"Hello World"} />
    </div>
  );
}

ReactDOM.render(
  <App compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);