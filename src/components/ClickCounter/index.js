import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="Container">
        <h1>the Button has Been Clicked {count} times</h1>
        <p className="para">Click the button to increase the count!</p>
        <div>
          <button className="Button" onClick={this.onIncrement} type="submit">
            Click me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
