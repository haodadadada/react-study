import {Component} from 'react'

export default class About extends Component {
    state = {
        props: this.props
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                About组件
            </div>
        )
    }
}