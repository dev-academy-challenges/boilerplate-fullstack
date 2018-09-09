import React from 'react'

import {Link} from 'react-router-dom'
import {getBets} from '../apiClient'
import {Z_BEST_COMPRESSION} from 'zlib'

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

    const betId = this.state.bets.map(bet => {
      return <p key={bet.id}>{bet.id}</p>
    })

    const betPerson = this.state.bets.map(bet => {
      return <p key={bet.id}>{bet.person}</p>
    })

    const betCouple = this.state.bets.map(bet => {
      return <p key={bet.id}>{bet.couple}</p>
    })

    const betBet = this.state.bets.map(bet => {
      return <p key={bet.id}>{bet.bet}</p>
    })

    const betAmount = this.state.bets.map(bet => {
      return <p key={bet.id}>{bet.amountBet}</p>
    })

    const betWon = this.state.bets.map(bet => {
      return <p key={bet.id}>{bet.amountWon}</p>
    })

    const betPercentage = this.state.bets.map(bet => {
      return <p key={bet.id}>{(bet.amountWon / bet.amountBet) * 100}%</p>
    })

    return (
      <div className="container">
        <h1 style={header}>Bets</h1>
        <div style={nav}>
          <Link to="/"><button>Home</button></Link>
        </div>
        <div className="row">
          <div className="col-md-2">
            <h4>Couple</h4>
            {betCouple}
          </div>
          <div className="col-md-2">
            <h4>Person</h4>
            {betPerson}
          </div>
          <div className="col-md-2">
            <h4>Bet</h4>
            {betBet}
          </div>
          <div className="col-md-2">
            <h4>Amount Bet</h4>
            {betAmount}
          </div>
          <div className="col-md-2">
            <h4>Bet Won</h4>
            {betWon}
          </div>
          <div className="col-md-2">
            <h4>Percentage</h4>
            {betPercentage}
          </div>
        </div>
      </div>
    )
  }
}

export default Bets
