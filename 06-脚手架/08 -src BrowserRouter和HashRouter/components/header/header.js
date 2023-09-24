import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class header extends Component {
  render() {
    console.log('header', this.props)
    return (
      <div>header</div>
    )
  }
}
// withRouter可以加工一般组件 让一般组件具备路由组件的Api 返回一个新组件
export default withRouter(header)
