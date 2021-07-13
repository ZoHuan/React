import React, { PureComponent } from "react";
import "./index.css";

export default class Parent extends PureComponent {
  state = { carName: "奔驰" };

  changeCar = () => {
    this.setState({ carName: "迈巴赫" });
  };

  /*   shouldComponentUpdate(nextProps, nextState) {
    // this.props,this.state  目前的props和state
    // nextProps,nextState    变化的props和state
    console.log(this.props, this.state);
    console.log(nextProps, nextState);
    return !(this.state.carName === nextState.carName);
  } */

  render() {
    console.log("Parent---render");
    const { carName } = this.state;
    return (
      <div className="parent">
        <h3>Parent组件</h3>
        <span>座驾:{carName}</span>
        <br />
        <button onClick={this.changeCar}>点击</button>
        <Child carName={carName} />
      </div>
    );
  }
}

class Child extends PureComponent {
  /*   shouldComponentUpdate(nextProps, nextState) {
    return !(this.props.carName === nextProps.carName);
  } */

  render() {
    console.log("Child---render");
    return (
      <div className="child">
        <h3>Child组件</h3>
        <span>汽车:{this.props.carName}</span>
      </div>
    );
  }
}
