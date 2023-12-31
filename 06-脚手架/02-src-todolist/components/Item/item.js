import React, { Component } from 'react'
import './item.css'

export default class Item extends Component {

  state = {
    mouse: false
  }


  handleMouse = (flag) => {
    return () => {
      this.setState({
        mouse: flag
      })
    }
  }

  handleClick = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    }
  }

  handleDelete = (id) => {
    if(window.confirm('确定删除吗？'))
      this.props.deleteTodo(id);
  }

  render() {
    const {id, name, done} = this.props;
    const {mouse} = this.state;
    return (
        <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} style={{backgroundColor: mouse ? '#ddd' : '#fff'}}>
            <label>
                <input type="checkbox" checked={done} onChange={this.handleClick(id)} />
                <span>{name}</span>
            </label>
                                                                                                          {/* 两种不同的回调写法 */}
            <button className="btn btn-danger" style={{display: mouse ? 'inline-block' : 'none'}} onClick={() => this.handleDelete(id)}>删除</button>
        </li>
    )
  }
}
