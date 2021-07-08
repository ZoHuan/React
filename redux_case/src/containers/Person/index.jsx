import React, { Component } from "react";

export default class Person extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="输入名字" />
        <input type="text" placeholder="输入年龄" />
        <button>添加</button>
        <ul>
          <li>名字1--年龄1</li>
          <li>名字2--年龄2</li>
          <li>名字3--年龄3</li>
        </ul>
      </div>
    );
  }
}
