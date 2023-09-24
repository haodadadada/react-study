import {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import Detail from './detail/detail';

// 向路由组件传递参数
    // 路由链接(携带参数)
    // 注册路由(声明接收, 只有params需要声明接收)
    // 接收参数(this.props)
export default class Message extends Component {
    state = {
        messageArr: [
            {id: '001', name: 'message1'},
            {id: '002', name: 'message2'},
            {id: '003', name: 'message3'}
        ]
    }

    replaceShow = (id, title) => {
        console.log(this.props);
        this.props.history.replace({pathname: `/home/message/detail`, state: {id, title}});
    }


    pushShow = (id, title) => {
        console.log(this.props);
        this.props.history.push(`/home/message/detail`,{id, title});
    }

    
    back = () => {
        this.props.history.goBack();
    }

    forward = () => {
        this.props.history.goForward();
    }

    render() { 
        const {messageArr} = this.state;
        return (
            <div>
                <div>message组件</div>
                <ul>
                    {
                        messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.name}`}>{msgObj.name}</Link> */}
                                    {/* search参数 */}
                                    {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.name}`}>{msgObj.name}</Link> */}
                                    {/* state参数 */}
                                    <Link replace to={{pathname: `/home/message/detail`, state: {id: msgObj.id, title: msgObj.name}}}>{msgObj.name}</Link>
                                    <button onClick={() => this.pushShow(msgObj.id, msgObj.name)}>push查看</button>
                                    <button onClick={() => this.replaceShow(msgObj.id, msgObj.name)}>replace查看</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
                {/* 声明接收params参数 */}
                {/* component属性为小写 */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}

                {/* search无需声明接收 */}
                <Route path="/home/message/detail" component={Detail}></Route>

            </div>
        )
    }
}