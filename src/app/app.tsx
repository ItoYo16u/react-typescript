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
import { CounterContextProvider } from './system_components/providers/counter_context_provider';
import { CounterContext } from './data/context/counter_context';
import { ItemContextProvider } from './system_components/providers/item_context_provider';
import { IItemStoreAction } from './data/store/item_store';
import { Item } from './domain/model/item';
const App: React.FC<{ compiler: string, framework: string }> = (props) => {
  return (
  <CounterContextProvider >
      <div
    css={css`
      background-color: rgba(247,247,247,1)
    `}
    >
      <CounterContext.Consumer>
        {(value)=><Subtitle>{value.counter}</Subtitle>}
      </CounterContext.Consumer>
      <ItemContextProvider 
      builder={(ctx)=>{
        const Ctx = ctx as unknown as React.Context<IItemStoreAction>
        const item = new Item(1,"hoge")
        return (
          <div>
            <Ctx.Consumer>
        {value=><div>{value.get()}</div>}
            </Ctx.Consumer>
            <Ctx.Consumer>
              {value=><Button label="test" onTap={()=>value.add(item)}></Button>}
            </Ctx.Consumer>
          </div>
        )
      }}
      ></ItemContextProvider>

      <div>{props.compiler}</div>
      <div>{props.framework}</div>
        <Row>
        <Card title={"hello"} url={"http://example.com"}></Card>
        <Card title={"hello"} url={"http://example.com"}></Card>
        <Card title={"hello"} url={"http://example.com"}></Card>
        <Card title={"hello"} url={"http://example.com"}></Card>
        </Row>
        <BaseField></BaseField>
       <CounterContext.Consumer>
        {({incrimentCounter}) =>  <Button onTap={incrimentCounter} label={"Hello World"} />}
       </CounterContext.Consumer>
    </div>
  </CounterContextProvider>
  );
}

ReactDOM.render(
  <App compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);