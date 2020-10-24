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
import { Column } from './components/layout/column';
import { Title } from './components/common/typography/title';
import { Subtitle } from './components/common/typography/subtitle';
import { ColorTheme } from './view/helper/color_helper';
import { CircularProgressIndicator } from './components/common/media/placeholder/circular_progress_indicator';
import { Modal } from './components/layout/modal';
const App: React.FC<{ compiler: string, framework: string }> = (props) => {
  const item = new Item(1, "test")
  const [modalIsOpen, setIsOpen] = useState(false);
  return (
      <div
    css={css`
      background-color: ${ColorTheme.BackGround}
    `}
    >

        <ChangeNotifierProvider
          create={() => ItemStore.instance([])}
          builder={(Ctx, _) => {
            return <div>
              <Ctx.Consumer>
                {(actions) => (<Button label="item count" onTap={() => actions.add(item)}></Button>)}
              </Ctx.Consumer>
              <Button label="item count" isFilled={true} onTap={() => {}}></Button>
          </div>
        }}>

      </ChangeNotifierProvider>
      <Button isFilled={true} isRounded={true} label="item count" onTap={() => { }}></Button>
      <Button isRounded={true} label="item count" onTap={() => { }}></Button>
      {modalIsOpen ? <Modal callback={() => setIsOpen(false)}>
        {(_) => (<Column>
          <Title>Confirm</Title>
          <Subtitle>Agree Term of Use?</Subtitle>
          <Row>
            <Button label="cancel" onTap={_}></Button>
           <Button label="agree" isFilled={true} onTap={()=>{console.log("do something")}}></Button>
            
          </Row>
        </Column>)}
      </Modal> : <Button label="open" onTap={()=>setIsOpen(true)}></Button>}


      <div>{props.compiler}</div>
      <div>{props.framework}</div>
        <Row>
        <Card  url={"http://example.com"}>hello world</Card>
        <Card  url={"http://example.com"}>goodbye world</Card>
        <Card  url={"http://example.com"}>wowowow</Card>
        <Card url={"http://example.com"} backgroundColor={ColorTheme.Primary} ><Row>
          <div css={css`
            padding: 8px;
          `}>
          <CircularProgressIndicator></CircularProgressIndicator>
          </div>
          <Column>
            <Title>John Doe</Title>
            <Subtitle>lorem ipsum dolr hogehoge.</Subtitle>
          </Column>
        </Row></Card>
        </Row>
        <BaseField></BaseField>
    </div>
  );
}

ReactDOM.render(
  <App compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);