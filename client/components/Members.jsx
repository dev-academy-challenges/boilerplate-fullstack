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
    this.removeDuplicates = this.removeDuplicates.bind(this)
  }

  componentDidMount () {
    this.fetchMembers()
  }

  removeDuplicates (array) {
    [...new Set(array)].map((item) => {
      return item
    })
  }

  fetchMembers () {
    return getMembers()
      .then(members => {
        this.setState({members: members})
      })
  }

  render () {
    const couplesAll = this.state.members.map(member => {
      return member.couple
    })

    const couples = [...new Set(couplesAll)].map((couple, i) => {
      return <div className="col-md-4" key={i}>
        <h5 className="heading">{couple}</h5>
      </div>
    })

    return (
      <div className="container-fluid">
        <h1 className='header'>Members</h1>
        <div className='nav'>
          <Link to="/"><button className="button">Home</button></Link>
          <Link to="/bets"><button className="button">Bets</button></Link>
        </div>
        <div className="row">
          {couples}
        </div>
      </div>
    )
  }
}

export default Members
