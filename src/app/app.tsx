import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from './components/common/button/button';
import { BaseField } from './components/common/field/base_field';
import { Avator } from './components/common/media/image/avator';
import { ErrorMessage } from './components/common/media/message/error_message';
import { WarningMessage } from './components/common/media/message/warning_message';
import { CircularProgressIndicator } from './components/common/media/placeholder/circular_progress_indicator';
import { Tag } from './components/common/tag/tag';
import { Subtitle } from './components/common/typography/subtitle';
import { Column } from './components/layout/column';
import { Row } from './components/layout/row';
import { Card } from './components/partial/card/card';

const App: React.FC<{ compiler: string, framework: string }> = (props) => {

  const [count,setCount] = useState(0);
  return (
    <div>
      <Subtitle>{count}</Subtitle>
      <div>{props.compiler}</div>
      <div>{props.framework}</div>
      <p>{count}</p>
      <CircularProgressIndicator></CircularProgressIndicator>
      <Column width="200px">
        <Card title={"hello"} url={"http://example.com"}></Card>
        <Card title={"hello"} url={"http://example.com"}></Card>
        <Card title={"hello"} url={"http://example.com"}></Card>
        <Card title={"hello"} url={"http://example.com"}></Card>
        <WarningMessage>hogehoge</WarningMessage>
        <ErrorMessage>hogehoge</ErrorMessage>
      </Column>
      <Row>
        <Tag label="hello" link="http://example.com"></Tag>
        <Tag label="hello"></Tag>
        <Tag label="hello"></Tag>
        <Tag label="hello"></Tag>
        <Tag label="hello"></Tag>
        <Tag label="hello"></Tag>
        <Tag label="hello"></Tag>
        <Tag label="hello"></Tag>
        </Row>

        <Row>
        <Card title={"hello"} url={"http://example.com"}></Card>
        <Card title={"hello"} url={"http://example.com"}></Card>
        <Card title={"hello"} url={"http://example.com"}></Card>
        <Card title={"hello"} url={"http://example.com"}></Card>
        </Row>
        <BaseField></BaseField>
      <Card title={"hello"} url={"http://example.com"}></Card>
      <Avator link="http://example.com" size={32}></Avator>
       <Button onTap={()=>setCount(prevCount=>prevCount + 1)} label={"Hello World"} />
    </div>
  );
}

ReactDOM.render(
  <App compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);