// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  increase1 = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="h1">
          The Button has been clicked <span className="count1">{count}</span>{' '}
          times
        </h1>
        <p className="p1">Click the button to increase the count!</p>
        <button type="button" className="btn1" onClick={this.increase1}>
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
