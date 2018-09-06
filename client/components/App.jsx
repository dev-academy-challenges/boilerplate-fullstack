import React from 'react'

import {getBets} from '../apiClient'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bets: []
    }
  }

  componentDidMount () {
    getBets()
      .then(bets => {
        this.setState({bets})
      })
  }

  render () {
    return (
      <div className='app'>
        <h1>Fullstack Boilerplate</h1>
        <ul>
          {this.state.bets.map(bets => (
            <li key={bets}>{bets}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
