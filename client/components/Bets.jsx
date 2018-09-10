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
    // RETRIEVING DATA FROM BETS TABLE ------------------------------------
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

    // Need to refactor this? Do a switch statement

    const betPercentage = this.state.bets.map(bet => {
      const betPercent = (bet.amountWon / bet.amountBet) * 100
      if (betPercent < 50) {
        return <p key={bet.id} style={{backgroundColor: 'rgb(182, 116, 116)'}}>{betPercent}%</p>
      } else if (betPercent < 100) {
        return <p key={bet.id} style={{backgroundColor: 'yellow'}}>{betPercent}%</p>
      } else if (betPercent < 200) {
        return <p key={bet.id} style={{backgroundColor: 'rgb(113, 182, 113)'}}>{betPercent}%</p>
      } else {
        return <p key={bet.id} style={{backgroundColor: 'purple'}}>{betPercent}%</p>
      }
    })

    // REACT HTML RENDERING ------------------------------------------------

    // Now I need a button saying add new bet.
    // This will take me to a new component - add bet
    // this will have a form page

    return (
      <div className="container">
        <h1 className='header'>Bets</h1>
        <div className='nav'>
          <Link to="/"><button>Home</button></Link>
        </div>

        <div className="button">
          <Link to="/addbet"><button>Add Bet</button></Link>
        </div>

        <div className="row">
          <div className="col-md-2">
            <h4 className="heading">Couple</h4>
            {betCouple}
          </div>
          <div className="col-md-2">
            <h4 className="heading">Person</h4>
            {betPerson}
          </div>
          <div className="col-md-2">
            <h4 className="heading">Bet</h4>
            {betBet}
          </div>
          <div className="col-md-2">
            <h4 className="heading">Amount Bet</h4>
            {betAmount}
          </div>
          <div className="col-md-2">
            <h4 className="heading">Bet Won</h4>
            {betWon}
          </div>
          <div className="col-md-2">
            <h4 className="heading">Percentage</h4>
            {betPercentage}
          </div>
        </div>
      </div>
    )
  }
}

export default Bets
