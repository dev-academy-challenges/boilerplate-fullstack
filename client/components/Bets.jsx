import React from 'react'

import {getBets} from '../apiClient'

class Bets extends React.Component {
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
      <div className='bets'>
        <h1>Bets</h1>
        <ul>
          {this.state.bets.map(bets => (
            <li key={bets}>{bets}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Bets
