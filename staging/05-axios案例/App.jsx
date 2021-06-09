import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {
  // 初始化状态
  state = {
    users: [], // users初始值为数组
    isFirst: true, // 是否为第一次打开页面
    isLoading: false, // 表示是否处于加载中
    err: "", // 储存请求相关的错误信息
  };

  // 更新App的state
  updateAppState = (stateObj) => {
    this.setState(stateObj);
  };
  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    );
  }
}
