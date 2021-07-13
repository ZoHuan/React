import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  state = {
    hasError: "",
  };

  // 当Parent的子组件出现报错时候，会触发getDerivedStateFromErrot调用，并携带错误信息
  static getDerivedStateFromErrot(error) {
    console.log(error);
    return { hasError: error };
  }

  componentDidCatch() {
    console.log("渲染组件时出错");
  }

  render() {
    return (
      <div>
        <h2>Parent组件</h2>
        {this.state.hasError ? <h2>当前网络不稳定，稍后再试</h2> : <Child />}
      </div>
    );
  }
}
