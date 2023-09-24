import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

    getStudentData = () => {
        // 所处的位置和发送的位置相同则可以省略主机名和端口号
        axios.get('/api/students').then(res => {
            console.log('成功', res.data);
        }, err => {
            console.log('失败', err);
        })
    }

    render() {
        return (
            <div>
            <button onClick={this.getStudentData}>点我发送请求</button>
            </div>
        )
    }
}
