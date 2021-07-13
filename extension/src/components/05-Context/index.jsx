import React, { Component } from "react";
import "./index.css";

// 创建Context对象
const MyContext = React.createContext();
const { Provider, Consumer } = MyContext;

export default class A extends Component {
  state = { username: "tom", age: 18 };

  render() {
    const { username, age } = this.state;
    return (
      <div className="parent">
        <h3>A组件</h3>
        <h4>用户名:{username}</h4>
        <Provider value={{ username, age }}>
          <B />
        </Provider>
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div className="child">
        <h3>B组件</h3>
        <C />
      </div>
    );
  }
}

/* class C extends Component {
  // 声明接收contextType
  static contextType = MyContext;
  render() {
    const { username, age } = this.context;
    return (
      <div className="grand">
        <h3>C组件</h3>
        <h4>
          A组件用户名:{username},年龄是{age}
        </h4>
      </div>
    );
  }
} */

function C() {
  return (
    <div className="grand">
      <h3>C组件</h3>
      <h4>
        A组件用户名:
        <Consumer>{(value) => `${value.username},年龄是${value.age}`}</Consumer>
      </h4>
    </div>
  );
}
