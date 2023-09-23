import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import './App.scss'
import About from './pages/about/about'
import Home from './pages/home/home'
import Header from './components/header/header'
import MyNavLink from './components/myNavLink/myNavLink'
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header></Header>
        {/* 原生html 靠<a>跳转到不同页面 */}
        {/* react中靠路由链接切换组件 -- 编写 */}
        {/* <NavLink activeClassName="atguigu" to="/about">About</NavLink> */}
        {/* <NavLink activeClassName="atguigu" to="/home">Home</NavLink> */}
        {/*                     直接传入props key为children */}
        <MyNavLink to="/about" >About</MyNavLink>
        <MyNavLink to="/home" >Home</MyNavLink>
        
        {/* 注册路由 */}
        {/*                   路由组件 会收到路由器传递的参数 */}
        <Route path="/about" component={About}></Route>
        <Route path="/home" component={Home}></Route>
      </div>
    )
  }
}