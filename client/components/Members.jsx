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
    // const couples = this.state.members.map((member, i) => {
    const bh = 'Bielby/Hart'
    const ss = `Scaglia's`
    const bs = 'Burningham/Sim'
    //   return <div key={i} className="col-md-4">
    //     <h5 className="heading">{bh}</h5>
    //   </div>
    // })

    return (
      <div className="container-fluid">
        <h1 className='header'>Members</h1>
        <div className='nav'>
          <Link to="/"><button className="button">Home</button></Link>
          <Link to="/bets"><button className="button">Bets</button></Link>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h5 className="heading">{bh}</h5>
            <p>{this.state.members.map(item => {
              if (item.couple === bh) {
                return <ul><li>{item.person}</li></ul>
              }
            })}</p>
            <div>{this.state.members.map(item => {
              if (item.couple === bh) {
                return <img src={item.individualPhoto} />
              }
            })} </div>
          </div>
          <div className="col-md-4">
            <h5 className="heading">{ss}</h5>
            <p>{this.state.members.map(item => {
              if (item.couple === ss) {
                return <ul><li>{item.person}</li></ul>
              }
            })}</p>
            <div>{this.state.members.map(item => {
              if (item.couple === ss) {
                return <img src={item.individualPhoto} />
              }
            })} </div>
          </div>
          <div className="col-md-4">
            <h5 className="heading">{bs}</h5>
            <p>{this.state.members.map(item => {
              if (item.couple === bs) {
                return <ul><li>{item.person}</li></ul>
              }
            })}</p>
            <div>{this.state.members.map(item => {
              if (item.couple === bs) {
                return <img src={item.individualPhoto} />
              }
            })} </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Members
