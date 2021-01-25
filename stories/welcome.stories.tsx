import { storiesOf } from "@storybook/react";
import React from "react";

storiesOf("Welcome page", module).add(
  "welcome",
  () => {
    return (
      <>
        <h1>欢迎来到 claus-aka 组件库</h1>
        <h3>安装试试</h3>
        <code>npm install claus-aka --save</code>
      </>
    );
  },
  {}
);
