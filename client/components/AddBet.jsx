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
      couple: e.target.value,
      person: e.target.value
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
          <p style={{textAlign: 'left', width: '30%'}}>Couple: <input style={{float: 'right'}} name='couple' onChange={this.handleChange} /></p>
          <p style={{textAlign: 'left', width: '30%'}}>Person: <input style={{float: 'right'}} name='person' onChange={this.handleChange} /></p>
          <p style={{textAlign: 'left', width: '30%'}}>Bet: <input style={{float: 'right'}} name='bet' onChange={this.handleChange} /></p>
          <p style={{textAlign: 'left', width: '30%'}}>Amount Bet: <input style={{float: 'right'}} name='amountBet' onChange={this.handleChange} /></p>
          <p style={{textAlign: 'left', width: '30%'}}>Amount Won: <input style={{float: 'right'}} name='amountWon' onChange={this.handleChange} /></p>
          <p style={{textAlign: 'left', width: '30%'}}><button onClick={this.handleClick}>Add Bet</button></p>
        </div>
      </div>
    )
  }
}

export default Addbet
