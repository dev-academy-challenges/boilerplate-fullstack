import React from 'react'

import {Link} from 'react-router-dom'
import {getBets} from '../apiClient'

class Bets extends React.Component {
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
    const header = {
      padding: '2%',
      background: 'navy',
      color: 'white',
      width: '100%',
      margin: 0
    }
    // const body = {
    //   background: 'lightGrey',
    //   color: 'black',
    //   width: '100%',
    //   padding: '2%'
    // }
    const nav = {
      padding: '2%',
      background: 'green',
      color: 'white',
      width: '100%'
    }
    const betInfo = this.state.bets.map((item, iterator) => {
      return <li key={iterator}>
        {item.person}
      </li>
    })

    const betKeys = this.state.bets

    console.log(betKeys)

    return (
      <div className="container">
        <h1 style={header}>Bets</h1>
        <div style={nav}>
          <Link to="/"><button>Home</button></Link>
        </div>
        <div>
          {betInfo}
        </div>
        <table>

        </table>
      </div>
    )
  }
}

export default Bets
