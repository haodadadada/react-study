import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/header'
import List from './components/List/list'
import Footer from './components/Footer/footer'

export default class App extends Component {

  state = {
    todos: [
      {id: '001', name: '吃饭', done: true},
      {id: '002', name: '睡觉', done: true}
    ]
  }

  addTodo = (todoObj) => {
    // 获取原todos
    const {todos} = this.state;
    // 追加一个todo
    const newTodos = [todoObj, ...todos];
    // 更新状态
    this.setState({
      todos: newTodos
    })
  }

  updateTodo = (id, done) => {
    const {todos} = this.state;
    const newTodos = todos.map((todoObj) => {
      if(todoObj.id === id) {
        return {...todoObj, done};
      }
      else {
        return todoObj;
      }
    })
    this.setState({
      todos: newTodos
    })
  }

  deleteTodo = (id) => {
    const {todos} = this.state;
    const newTodos = todos.filter(todoObj => {
      return todoObj.id !== id;
    })
    this.setState({
      todos: newTodos
    })
  }

  changeAllTodo = (done) => {
    const {todos} = this.state;
    const newTodos = todos.map(todoObj => {
      return {...todoObj, done};
    })
    this.setState({
      todos: newTodos
    })
  }

  clearAllDone = () => {
    const {todos} = this.state;
    const newTodos = todos.filter(todoObj => {
      return todoObj.done === false; 
    })
    this.setState({
      todos: newTodos
    })
  }

  render() {
    const {todos} = this.state;
    return (
        <div className="todo-container">
            <div className="todo-wrap">
              <Header addTodo={this.addTodo} />
              <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></List>
              <Footer todos={todos} changeAllTodo={this.changeAllTodo} clearAllDone={this.clearAllDone}></Footer>
            </div>
        </div>
    )
  }
}
