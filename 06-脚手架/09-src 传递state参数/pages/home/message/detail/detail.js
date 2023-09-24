import React, { Component } from 'react'
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
        // 依靠缓存 刷新也能保留 不会在地址栏出现
        const {id, title} =  this.props.location.state || {};
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
