import React, {Component} from 'react'
import { NavLink } from 'react-router-dom';
export default class myNavLink extends Component {
    render() {
        // console.log(this.props);
        return(
            <NavLink activeClassName="atguigu" className="list-group-item" {...this.props} />
        )
    }
}