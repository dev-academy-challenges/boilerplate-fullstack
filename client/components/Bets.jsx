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
    this.percentColour = this.percentColour.bind(this)
    this.didBetWin = this.didBetWin.bind(this)
    this.betPercentage = this.betPercentage.bind(this)
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

  percentColour (betPercentage) {
    const red = {background: '#EE3239', color: 'white'}
    const yellow = {background: '#FEC748', color: 'white'}
    const green = {background: '#499360', color: 'white'}
    const purple = {background: '#632A7E', color: 'white'}

    if (betPercentage < 50) {
      return red
    } else if (betPercentage < 100) {
      return yellow
    } else if (betPercentage < 200) {
      return green
    } else if (betPercentage > 200) {
      return purple
    } else {
      return red
    }
  }

  didBetWin (betAmount) {
    const convertToNumber = Number(betAmount).toFixed(2)
    if (isNaN(convertToNumber)) {
      return <p>Not a winner</p>
    } else {
      return <p>${convertToNumber}</p>
    }
  }

  betPercentage (betPercent) {
    const convertToNumber = Number(betPercent).toFixed(0)
    if (isNaN(convertToNumber)) {
      return Number(0.00).toFixed(2)
    } else {
      return convertToNumber
    }
  }

  render () {
    // RETRIEVING DATA FROM BETS TABLE ------------------------------------
    const bet = this.state.bets.map(bet => {
      const betPercent = (bet.amountWon / bet.amountBet) * 100

      return <div key={bet.id}>
        <div className="bet-row">
        </div>
        <div className="row">
          <div className="col-md-2"><p>{bet.couple}</p></div>
          <div className="col-md-2"><p>{bet.person}</p></div>
          <div className="col-md-2"><p>{bet.bet}</p></div>
          <div className="col-md-2"><p>${Number(bet.amountBet).toFixed(2)}</p></div>
          <div className="col-md-2"><p>{this.didBetWin(bet.amountWon)}</p></div>
          <div className="col-md-2"><p className="percent" style={this.percentColour(betPercent)}>
            {this.betPercentage(betPercent)}%</p>
          </div>

        </div>
      </div>
    })

    return (
      <div className="container-fluid">
        <h1 className='header'>Bets</h1>
        <div className='nav'>
          <Link to="/"><button className="button">Home</button></Link>
          <Link to="/addbet"><button>Add Bet</button></Link>
          <Link to="/datacheck"><button>Data Check</button></Link>
        </div>
        <div className="row">
          <div className="col-md-2"><h5 className="heading">Couple</h5></div>
          <div className="col-md-2"><h5 className="heading">Person</h5></div>
          <div className="col-md-2"><h5 className="heading">Bet</h5></div>
          <div className="col-md-2"><h5 className="heading">$ Bet</h5></div>
          <div className="col-md-2"><h5 className="heading">$ Won</h5></div>
          <div className="col-md-2"><h5 className="heading">Percentage</h5></div>
        </div>
        <div>{bet}</div>
      </div>
    )
  }
}

export default Bets
