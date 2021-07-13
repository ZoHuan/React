import React, { Component } from "react";

export default class Child extends Component {
  state = {
    // users: [
    //   { id: "001", name: "Tom", age: 18 },
    //   { id: "002", name: "jack", age: 19 },
    //   { id: "003", name: "Jhon", age: 20 },
    // ],

    users: "aaa",
  };
  render() {
    return (
      <div>
        <h2>Child组件</h2>
        {this.state.users.map((userObj) => {
          return (
            <h4 key={userObj.id}>
              {userObj.name}----{userObj.age}
            </h4>
          );
        })}
      </div>
    );
  }
}
