import React from 'react'

import {Link} from 'react-router-dom'
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
    const header = {
      padding: '2%',
      background: 'navy',
      color: 'white',
      width: '100%',
      margin: 0
    }
    const body = {
      background: 'lightGrey',
      color: 'black',
      width: '100%',
      padding: '2%'
    }
    const nav = {
      padding: '2%',
      background: 'green',
      color: 'white',
      width: '100%'
    }

    return (
      <div className="container">
        <h1 style={header}>Bets</h1>
        <div style={nav}>
          <Link to="/"><button>Home</button></Link>
        </div>
        <ul style={body}>
          {this.state.bets.map(bets => (
            <li key={bets}>{bets}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Bets
