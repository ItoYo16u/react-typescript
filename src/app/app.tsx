/** @jsx jsx */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "./components/common/button/button";
import { BaseField } from "./components/common/field/base_field";
import { Align, Row } from "./components/layout/row";
import { Card } from "./components/partial/card/card";
import { css, jsx } from "@emotion/core";
import "normalize.css";
import "../assets/stylesheet/index.css";
import { Item } from "./domain/item/model/item";
import { Column } from "./components/layout/column";
import { Title } from "./components/common/typography/title";
import { Subtitle } from "./components/common/typography/subtitle";
import { ColorTheme } from "./view/helper/color_helper";
import { CircularProgressIndicator } from "./components/common/media/placeholder/circular_progress_indicator";
import { Modal } from "./components/layout/modal";
import { Header } from "./components/partial/header";
const App: React.FC<{ compiler: string; framework: string }> = (props) => {
  const item = new Item(1, "test");
  const [modalIsOpen, setIsOpen] = useState(false);
  return (
    <div
      css={css`
        background-color: ${ColorTheme.BackGround};
      `}
    >
      {" "}
      <Header></Header>
      {modalIsOpen ? (
        <Modal callback={() => setIsOpen(false)}>
          {(_) => (
            <Column>
              <Title>Confirm</Title>
              <Subtitle>Agree Term of Use?</Subtitle>
              <Row align={Align.right}>
                <Button label="キャンセル" onTap={_} isRounded={true}></Button>
                <Button
                  label="同意する"
                  isRounded={true}
                  isFilled={true}
                  onTap={() => {
                    console.log("do something");
                  }}
                ></Button>
              </Row>
            </Column>
          )}
        </Modal>
      ) : (
        <Button label="開く" onTap={() => setIsOpen(true)}></Button>
      )}
      <div>{props.compiler}</div>
      <div>{props.framework}</div>
      <Row>
        <Card url={"http://example.com"}>
          <Row>
            <div
              css={css`
                padding: 8px;
              `}
            >
              <CircularProgressIndicator></CircularProgressIndicator>
            </div>
            <Column>
              <Title>John Doe</Title>
              <Subtitle>lorem ipsum dolr hogehoge.</Subtitle>
            </Column>
          </Row>
        </Card>
        <Card url={"http://example.com"}>
          <Row>
            <div
              css={css`
                padding: 8px;
              `}
            >
              <CircularProgressIndicator></CircularProgressIndicator>
            </div>
            <Column>
              <Title>鈴木 太郎</Title>
              <Subtitle>じゅげむじゅげむ ごこうのすりきれ.</Subtitle>
            </Column>
          </Row>
        </Card>
      </Row>
      <BaseField></BaseField>
    </div>
  );
};

ReactDOM.render(
  <App compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);
