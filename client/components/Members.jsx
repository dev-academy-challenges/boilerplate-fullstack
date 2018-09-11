import React from 'react'

import {Link} from 'react-router-dom'
import {getMembers} from '../apiClient'

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

  fetchMembers () {
    return getMembers()
      .then(members => {
        this.setState({members: members})
      })
  }

  render () {
    const member = this.state.members.map(member => {
      return member.couple
    })

    return (
      <div className="container-fluid">
        <h1 className='header'>Members</h1>
        <div className='nav'>
          <Link to="/"><button className="button">Home</button></Link>
          <Link to="/bets"><button className="button">Bets</button></Link>
        </div>
        <div className="row">
          <div className="col-md-6">

          </div>{member}</div>
      </div>
    )
  }
}

export default Members
