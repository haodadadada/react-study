import {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import Detail from './detail/detail';

// 向路由组件传递参数
    // 1、params参数
        // 路由链接(携带参数)
        // 注册路由(声明接收)
        // 接收参数
export default class Message extends Component {
    state = {
        messageArr: [
            {id: '001', name: 'message1'},
            {id: '002', name: 'message2'},
            {id: '003', name: 'message3'}
        ]
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
                                    <Link to={`/home/message/detail/${msgObj.id}/${msgObj.name}`}>{msgObj.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* 声明接收params参数 */}
                {/* component属性为小写 */}
                <Route path="/home/message/detail/:id/:title" component={Detail}></Route>
            </div>
        )
    }
}