import React from 'react'

import {Link} from 'react-router-dom'
import {getBets} from '../apiClient'

class Members extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      members: []
    }
    this.fetchMembers = this.fetchMembers.bind(this)
  }

  componentDidMount () {
    this.fetchMembers()
  }

  fetchBets () {
    return getMembers()
      .then(members => {
        this.setState({members: members})
      })
  }

  render () {
    // RETRIEVING DATA FROM BETS TABLE ------------------------------------
    const member = this.state.members.map(member => {
      return <div key={member.id}>
        <div className="bet-row">
        </div>
        <div className="row">
          <div className="col-md-2"><p>{member.name}</p></div>
        </div>
      </div>
    })

    return (
      <div className="container">
        <h1 className='header'>Members</h1>
        <div className='nav'>
          <Link to="/"><button className="button">Home</button></Link>
          <Link to="/bets"><button className="button">Bets</button></Link>
        </div>
        <div className="row">
          <div className="col-md-2"><h5 className="heading">Couple</h5></div>
        </div>
        <p>{member}</p>
      </div>
    )
  }
}

export default Members
