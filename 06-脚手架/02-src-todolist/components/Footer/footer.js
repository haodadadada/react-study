import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {

  // 全选的回调  
  handleChangeAllTodo = (event) => {
    this.props.changeAllTodo(event.target.checked);
  }

  handleClearAllDone = () => {
    this.props.clearAllDone();
  }

  render() {
    const {todos} = this.props;
    // 已完成的数量
    let doneCount = todos.reduce((pre, todo) => pre + (todo.done? 1 : 0), 0);
    // 总数
    let totalCount = todos.length;

    return (
      <div className="todo-footer">
          <label>
          <input type="checkbox" checked={doneCount === totalCount && totalCount !== 0} onChange={this.handleChangeAllTodo}/>
          </label>
          <span>
          <span>已完成{doneCount}</span> / 全部{totalCount}
          </span>
          <button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
      </div>
    )
  }
}
