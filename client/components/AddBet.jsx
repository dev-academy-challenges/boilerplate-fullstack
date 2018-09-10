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
      percentage: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick (e) {
    e.preventDefault()
    addBets(this.state)
    // .then(this.props.updateUserList)
  }

  render () {
    return (

      <div className="container">
        <h1 className="header">Add a new bet</h1>
        <div className="nav">
          <Link to="/"><button>Home</button></Link>
          <Link to="/bets"><button>Bets</button></Link>
        </div>

        <div className='form'>

          <div className="row">
            <div className="col-md-4">
              <p>Couple: <input name='couple' value={this.state.couple} onChange={this.handleChange} /></p>
            </div>
            <div className="col-md-6">
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <p>Person: <input name='person' value={this.state.person} onChange={this.handleChange} /></p>
            </div>
            <div className="col-md-6">
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <p>Bet: <input name='bet' value={this.state.bet} onChange={this.handleChange} /></p>
            </div>
            <div className="col-md-6">
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <p>amountBet: <input name='amountBet' value={this.state.amountBet} onChange={this.handleChange} /></p>
            </div>
            <div className="col-md-6">
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <p>amountWon: <input name='amountWon' value={this.state.amountWon} onChange={this.handleChange} /></p>
            </div>
            <div className="col-md-6">
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <p>Sport: <input name='sport' value={this.state.sport} onChange={this.handleChange} /></p>
            </div>
            <div className="col-md-6">
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <p>percentage: <input name='percentage' value={this.state.percentage} onChange={this.handleChange} /></p>
            </div>
            <div className="col-md-6">
            </div>
          </div>

          <p style={{textAlign: 'left', width: '30%'}}>
            <button onClick={this.handleClick}>Add Bet</button>
          </p>
        </div>
      </div>

    )
  }
}

export default Addbet
