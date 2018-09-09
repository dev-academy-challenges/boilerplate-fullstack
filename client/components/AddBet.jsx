import React from 'react'

import {Link} from 'react-router-dom'
import {addBets} from '../apiClient'

class Addbet extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      couple: '',
      person: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (e) {
    this.setState({
      couple: e.target.value
    })
  }

  handleClick (e) {
    addBets(this.state)
    console.log(this.state)
    // .then(this.props.updateUserList)
  }

  render () {
    // IN LINE STYLING ----------------------------------------------------
    const header = {
      padding: '2%',
      background: '#32435F',
      color: '#E1DCD9',
      width: '100%',
      textTransform: 'uppercase',
      marginBottom: 0
    }
    const nav = {
      padding: '2%',
      background: '#A67F78',
      color: '#E1DCD9',
      width: '100%',
      marginBottom: '2%'
    }
    const form = {
      background: '#8F8681',
      color: 'white',
      padding: '2%',
      marginLeft: 0,
      marginRight: 0
    }
    return (

      <div className="container">
        <h1 style={header}>Add a new bet</h1>
        <div style={nav}>
          <Link to="/"><button>Home</button></Link>
          <Link to="/bets"><button>Bets</button></Link>
        </div>

        <div style={form} className='form'>

          <div className="row">
            <div className="col-md-4">
              <p>Couple: <input name='couple' onChange={this.handleChange} /></p>
            </div>
            <div className="col-md-6">
              <p>{this.state.couple}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <p>Person: <input name='person' onChange={this.handleChange} /></p>
            </div>
            <div className="col-md-6">
              <p>{this.state.person}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <p>amountBet: <input name='amountBet' onChange={this.handleChange} /></p>
            </div>
            <div className="col-md-6">
              <p>{}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <p>amountWon: <input name='amountWon' onChange={this.handleChange} /></p>
            </div>
            <div className="col-md-6">
              <p>{}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <p>percentage: <input name='percentage' onChange={this.handleChange} /></p>
            </div>
            <div className="col-md-6">
              <p>{}</p>
            </div>
          </div>

          <p style={{textAlign: 'left', width: '30%'}}><button onClick={this.handleClick}>Add Bet</button></p>
        </div>
      </div>

    )
  }
}

export default Addbet
