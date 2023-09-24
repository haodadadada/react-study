import Hello from './Components/Hello/Hello'
import Welcome from './Components/Welcome/Welcome'
import {Component} from 'react'
console.log(Component)

class App extends Component {
  render() {
    return (
      <div>
        <Hello></Hello>
        <Welcome></Welcome>
      </div>
    )
  }
}

export default App;
