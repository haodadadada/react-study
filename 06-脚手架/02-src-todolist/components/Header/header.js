import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import './header.css'

export default class header extends Component {

  // 对接收的props进行类型、必要性的限制
  // func代表函数
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleKeyUp = (event) => {
    const {keyCode, target} = event;
    if(keyCode !== 13) {
      return;
    }
    // 添加名字不能为空
    if(target.value.trim() === '') {
      return;
    }
    const todoObj = {id: nanoid(), name: target.value, done: false}
    // 将todoObj传递给APP
    this.props.addTodo(todoObj);
    // 清空输入
    target.value = '';
  }

  render() {
    return (
        <div className="todo-header">
            <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp} />
        </div>
    )
  }
}
