import React, { Component } from 'react'
import qs from 'qs'
export default class Detail extends Component {

    state = {
        DetailData: [
            {id: '001', content: 'hello cn'},
            {id: '002', content: 'hello world'},
            {id: '003', content: 'hello future'}
        ]
    }

    render() {
        console.log(this.props);
        // 收到的search是urlencoded编码字符串 需要借助querystring解析
        const {search} = this.props.location;
        const {id, title} = qs.parse(search.slice(1));
        const filterData = this.state.DetailData.find(detailObj => {
            return detailObj.id === id;
        })
        return (
            <div>
                <ul>
                    <li>ID: {id}</li>
                    <li>TITLW: {title}</li>
                    <li>CONTENT: {filterData.content}</li>
                </ul>
            </div>
        
        )
    }
}
