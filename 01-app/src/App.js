import React, {Component} from 'react'
import './App.scss'
import {Button} from 'antd'
import 'antd/dist/reset.css'
export default class App extends Component {
  
  render() {
    return (
      <div className='app'>
        app
        <Button type="primary">Primary Button</Button>
      </div>
    )
  }
}