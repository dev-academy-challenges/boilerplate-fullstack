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
    // IN LINE STYLING ----------------
    const header = {
      padding: '2%',
      background: '#0359AE',
      color: 'white',
      width: '100%',
      margin: '0 important!'
    }
    const nav = {
      padding: '2%',
      background: '#14B09B',
      color: 'white',
      width: '100%'
    }
    const heading = {
      background: '#CC8A56',
      color: 'white',
      padding: '2%'
    }

    // RETRIEVING DATA FROM BETS TABLE -----------
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
      return <p key={bet.id}>${Number(bet.amountBet).toFixed(2)}</p>
    })

    const betWon = this.state.bets.map(bet => {
      return <p key={bet.id}>${Number(bet.amountWon).toFixed(2)}</p>
    })

    const betPercentage = this.state.bets.map(bet => {
      return <p key={bet.id}>{(bet.amountWon / bet.amountBet) * 100}%</p>
    })

    // REACT HTML RENDERING --------------
    return (
      <div className="container">
        <h1 style={header}>Bets</h1>
        <div style={nav}>
          <Link to="/"><button>Home</button></Link>
        </div>
        <div className="row">
          <div className="col-md-2">
            <h4 style={heading}>Couple</h4>
            {betCouple}
          </div>
          <div className="col-md-2">
            <h4 style={heading}>Person</h4>
            {betPerson}
          </div>
          <div className="col-md-2">
            <h4 style={heading}>Bet</h4>
            {betBet}
          </div>
          <div className="col-md-2">
            <h4 style={heading}>Amount Bet</h4>
            {betAmount}
          </div>
          <div className="col-md-2">
            <h4 style={heading}>Bet Won</h4>
            {betWon}
          </div>
          <div className="col-md-2">
            <h4 style={heading}>Percentage</h4>
            {betPercentage}
          </div>
        </div>
      </div>
    )
  }
}

export default Bets
