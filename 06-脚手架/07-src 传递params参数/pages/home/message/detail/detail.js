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
        const {id, title} = this.props.match.params;
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
