import React from 'react'

import Header from './Header'
import {Link} from 'react-router-dom'
// imported from API client
import {getBets, deleteBets, editBets} from '../apiClient'
import EditBet from './EditBet'

class Bets extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // bets initial state set to an empty
      // array
      bets: [],
      edit: false,
      betID: ''

    }
    // We must bind our functions to this
    // in order to use them in our render
    this.fetchBets = this.fetchBets.bind(this)
    this.percentColour = this.percentColour.bind(this)
    this.didBetWin = this.didBetWin.bind(this)
    this.betPercentage = this.betPercentage.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  componentDidMount () {
    // When component mounts,fetchBets runs
    // We could put getBets in here but good
    // Practice to split out from component did mount
    this.fetchBets()
  }

  componentDidUpdate () {
    this.fetchBets()
  }

  componentWillUnmount () {
    this.fetchBets()
  }

  fetchBets () {
    // getBets is called from API client
    // we have imported the function at the top
    // Once it has been run we will receive
    // The promise back and set it as the
    // new state of bets
    return getBets()
      .then(bets => {
        this.setState({bets: bets})
      })
  }

  percentColour (betPercentage) {
    // This function is a conditional
    // To change the style of the percentage
    // based on the percent category
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

  handleDelete (e) {
    // // sending the betID to deleteBets in API client
    deleteBets(e.target.value)
  }

  handleEdit (e) {
    editBets(e.target.value)
  }

  render () {
    const bet = this.state.bets.map(bet => {
      const betPercent = (bet.amountWon / bet.amountBet) * 100

      return <tr key={bet.id}>

        <td>{bet.couple}</td>
        <td>{bet.person}</td>
        <td>{bet.bet}</td>
        <td>${Number(bet.amountBet).toFixed(2)}</td>
        <td>{this.didBetWin(bet.amountWon)}</td>
        <td className="percent" style={this.percentColour(betPercent)}>
          {this.betPercentage(betPercent)}%</td>

        <td><button value={bet.id} onClick={this.handleEdit}>Edit</button></td>
        <td><button value={bet.id} onClick={this.handleDelete}>Delete</button></td>
      </tr>
    })

    return (

      <div>{this.state.edit ? <EditBet id={this.state.editId} />

        : <div className="container-fluid">
          <div>
            <Header header={Bets}/>
          </div>
          <div>
            <Link to="/addbet"><button>Add Bet</button></Link>
          </div>

          <div className="header"><h5>Bets</h5></div>
          <table className="table table-hover table-sm table-bordered">
            <thead>
              <tr>
                <th className="heading" scope="col">Couple</th>
                <th className="heading" scope="col">Person</th>
                <th className="heading" scope="col">Bet</th>
                <th className="heading" scope="col">$ Bet</th>
                <th className="heading" scope="col">$ Won</th>
                <th className="heading" scope="col">%</th>
                <th className="heading" scope="col"></th>
                <th className="heading" scope="col"></th>
              </tr>
            </thead>
            <tbody>{bet}</tbody>
          </table>
        </div>
      }
      </div>
    )
  }
}

export default Bets
