import React from 'react'

import {Link} from 'react-router-dom'

class MyComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      message: ''
    }
    this.handleEnter = this.handleEnter.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  // change code below this line

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyPress)
  }
  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  // change code above this line
  handleEnter () {
    this.setState({
      message: this.state.message + 'You pressed the enter key! '
    })
  }
  handleKeyPress (event) {
    if (event.keyCode === 13) {
      this.handleEnter()
    }
  }
  render () {
    return (

      <div className="container">
        <h1 className="header">Add a new bet</h1>
        <div className="nav">
          <Link to="/"><button>Home</button></Link>
          <Link to="/bets"><button>Bets</button></Link>
        </div>
        <div>
          <h1>{this.state.message}</h1>
        </div>
      </div>
    )
  }
}

export default MyComponent
