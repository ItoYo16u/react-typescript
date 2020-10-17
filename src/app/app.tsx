/** @jsx jsx */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from './components/common/button/button';
import { BaseField } from './components/common/field/base_field';
import { Row } from './components/layout/row';
import { Card } from './components/partial/card/card';
import {css,jsx} from "@emotion/core";
import "normalize.css";
import { Item } from './domain/item/model/item';
import { ChangeNotifierProvider } from './util/change_notifier_provider';
import { ItemStore } from './data/store/item_store';
const App: React.FC<{ compiler: string, framework: string }> = (props) => {
  const item = new Item(1,"test")
  return (
      <div
    css={css`
      background-color: rgba(247,247,247,1)
    `}
    >

        <ChangeNotifierProvider
          create={() => ItemStore.instance([])}
          builder={(Ctx, _) => {
            return <div>
              <Ctx.Consumer>
                {(actions) => (<Button label="item count" onTap={() => actions.add(item)}></Button>)}
             </Ctx.Consumer>
          </div>
        }}>

      </ChangeNotifierProvider>
      <Button label="item count" onTap={() => { }}></Button>
      <Button label="item count" onTap={()=>{}}></Button>


      <div>{props.compiler}</div>
      <div>{props.framework}</div>
        <Row>
        <Card title={"hello"} url={"http://example.com"}></Card>
        <Card title={"hello"} url={"http://example.com"}></Card>
        <Card title={"hello"} url={"http://example.com"}></Card>
        <Card title={"hello"} url={"http://example.com"}></Card>
        </Row>
        <BaseField></BaseField>
    </div>
  );
}

ReactDOM.render(
  <App compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);