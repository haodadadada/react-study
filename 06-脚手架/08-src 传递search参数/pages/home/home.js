import {Component} from 'react'
import MyNavLink from '../../components/myNavLink/myNavLink'
import {Route, Switch, Redirect} from 'react-router-dom'
import News from './news/news'
import Message from './message/message'
export default class Home extends Component {
    render() {
        return (
            <div>
                <div>home组件</div>
                <MyNavLink to='/home/message'>message</MyNavLink>
                <MyNavLink to='/home/news'>news</MyNavLink>


                <Switch>
                    {/* 注册多级路由要把前面的路由也加上 */}
                    <Route path="/home/news" component={News}></Route>
                    <Route path="/home/message" component={Message}></Route>
                    <Redirect to="/home/news"></Redirect>
                </Switch>
            </div>
        )
    }
}