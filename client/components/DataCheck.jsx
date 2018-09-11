import React from 'react'

import {Link} from 'react-router-dom'
import {getBets} from '../apiClient'

class Datacheck extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bets: []
    }
    this.fetchBets = this.fetchBets.bind(this)
  }

  componentDidMount () {
    this.fetchBets()
  }

  fetchBets () {
    return getBets()
      .then(bets => {
        this.setState({bets: bets})
      })
  }

  render () {
    return (
      <div className="container-fluid">
        <h1 className='header'>Data Check</h1>
        <div className='nav'>
          <Link to="/"><button className="button">Home</button></Link>
          <Link to="/bets"><button>Bets</button></Link>
        </div>
      </div>
    )
  }
}

export default Datacheck
