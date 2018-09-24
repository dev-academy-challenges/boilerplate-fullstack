import React from 'react'

import {Link} from 'react-router-dom'
import {addBets} from '../apiClient'

class Addbet extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      person: '',
      couple: '',
      sport: '',
      bet: '',
      amountBet: '',
      amountWon: '',
      percentage: '',
      submitted: false,
      redirect: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.redirectPage = this.redirectPage.bind(this)
  }

  // This function is triggerd by an onChange
  // event to set the state with what is entered in the
  // value field of the form
  handleChange (e) {
    this.setState({
      // Writing it this way with [] will allow us to
      // obtain all keys and values
      [e.target.name]: e.target.value
    })
  }

  // This functions is triggered by an onClick event
  // to submit the form. We are passing what we have just
  // set as state from the onChange function to addBets
  // function on the API client
  handleClick (e) {
    e.preventDefault()
    addBets(this.state)
    this.thankYouForSubmit()
    this.redirectPage()
  }

  thankYouForSubmit () {
    this.setState({
      submitted: true
    })
  }

  redirectPage () {
    this.setState({
      redirect: true
    })
  }

  render () {
    return (

      <div className="container">
        <h1 className="header">Add a new bet</h1>
        <div className="nav">
          <Link to="/"><button>Home</button></Link>
          <Link to="/bets"><button>Bets</button></Link>
        </div>

        <div>
          { this.state.submitted ? <p>Thank you for Submitting</p>

            : <div className='form'>
              <div className="row">
                <div className="col-md-3"><p className="p-form">Couple: </p> </div>
                <div className="col-md-3"><input name='couple' value={this.state.couple} onChange={this.handleChange} /></div>
              </div>

              <div className="row">
                <div className="col-md-3"><p className="p-form">Person: </p> </div>
                <div className="col-md-3"><input name='person' value={this.state.person} onChange={this.handleChange} /></div>
              </div>

              <div className="row">
                <div className="col-md-3"><p className="p-form">Bet: </p> </div>
                <div className="col-md-3"><input name='bet' value={this.state.bet} onChange={this.handleChange} /></div>
              </div>

              <div className="row">
                <div className="col-md-3"><p className="p-form">Amount Bet: </p> </div>
                <div className="col-md-3"><input name='amountBet' value={this.state.amountBet} onChange={this.handleChange} /></div>
              </div>

              <div className="row">
                <div className="col-md-3"><p className="p-form">Amount Won: </p> </div>
                <div className="col-md-3"><input name='amountWon' value={this.state.amountWon} onChange={this.handleChange} /></div>
              </div>

              <div className="row">
                <div className="col-md-3"><p className="p-form">Sport: </p> </div>
                <div className="col-md-3"><input name='sport' value={this.state.sport} onChange={this.handleChange} /></div>
              </div>

              <Link to="/bets"><button className="button" onClick={this.handleClick}>Add Bet</button></Link>

            </div>
          }
        </div>
      </div>

    )
  }
}

export default Addbet
