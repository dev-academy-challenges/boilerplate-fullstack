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
    return [...new Set(array)]
  }

  fetchMembers () {
    return getMembers()
      .then(members => {
        this.setState({members: members})
      })
  }

  render () {
    const bh = 'Bielby/Hart'
    const ss = `Scaglia's`
    const bs = 'Burningham/Sim'

    return (
      <div className="container-fluid">
        <h1 className='header'>Members</h1>
        <div className='nav'>
          <Link to="/"><button className="button">Home</button></Link>
          <Link to="/bets"><button className="button">Bets</button></Link>
        </div>
        <div className="row members">
          <div className="col-md-4">
            <h5 className="heading">{bh}</h5>
            <p>{this.state.members.map(item => {
              if (item.couple === bh) {
                return <div><p className="member-heading">{item.person}</p>
                  <img src={item.individualPhoto} />
                </div>
              }
            })}</p>

          </div>
          <div className="col-md-4">
            <h5 className="heading">{ss}</h5>
            <p>{this.state.members.map(item => {
              if (item.couple === ss) {
                return <div><p className="member-heading">{item.person}</p>
                  <img src={item.individualPhoto} />
                </div>
              }
            })}</p>
          </div>

          <div className="col-md-4">
            <h5 className="heading">{bs}</h5>
            <p>{this.state.members.map(item => {
              if (item.couple === bs) {
                return <div><p className="member-heading">{item.person}</p>
                  <img src={item.individualPhoto} />
                </div>
              }
            })}</p>
          </div>

        </div>
      </div>
    )
  }
}

export default Members
