// 创建组件App
import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from './components/Footer'
import './App.css'

// 导出App组件
export default class App extends Component {
  // 初始化状态
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '敲代码', done: false },
      { id: '004', name: '玩游戏', done: false },
    ]
  }
  addTodo = (todoObj) => {
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({ todos: newTodos })
  }

  updateTodo = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done: done }
      else return todoObj
    })
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} />
          <Footer />
        </div>
      </div>
    );
  }
}
