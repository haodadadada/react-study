import React, {Component} from 'react'
// 可以有高亮效果
import { NavLink } from 'react-router-dom';
export default class myNavLink extends Component {
    render() {
        // 收到传的数据
        console.log(this.props);
        return(
            <NavLink activeClassName="atguigu" className="list-group-item" {...this.props} />
        )
    }
}