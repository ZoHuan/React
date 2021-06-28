import React, { Component } from "react";
import { Button, DatePicker } from "antd";
import { WechatOutlined, SearchOutlined } from "@ant-design/icons";
import "./App.less";

export default class App extends Component {
  render() {
    function onChange(date, dateString) {
      console.log(date, dateString);
    }
    return (
      <div>
        <Button type="primary">按钮1</Button>
        <Button>按钮2</Button>
        <Button type="link">按钮3</Button>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <WechatOutlined />

        <DatePicker onChange={onChange} />
      </div>
    );
  }
}
