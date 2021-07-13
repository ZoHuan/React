import React, { Component } from "react";
import "./index.css";

export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <h3>Parent组件</h3>
        <Child render={(name) => <Grand name={name} />} />
      </div>
    );
  }
}

class Child extends Component {
  state = { name: "Tom" };
  render() {
    const { name } = this.state;
    return (
      <div className="child">
        <h3>Child组件</h3>
        {this.props.render(name)}
      </div>
    );
  }
}

class Grand extends Component {
  render() {
    return (
      <div className="grand">
        <h3>Grand组件,{this.props.name}</h3>
      </div>
    );
  }
}
