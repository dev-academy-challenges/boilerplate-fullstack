import React from 'react'

import {Link} from 'react-router-dom'

export default function Home (props) {
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
  // const heading = {
  //   background: '#8F8681',
  //   color: 'white',
  //   padding: '2%',
  //   textAlign: 'center',
  //   marginLeft: 0,
  //   marginRight: 0
  // }
  return (
    <div className="container">

      <div style={header}>
        <h1>Raro Punt Club</h1>
      </div>
      <div style={nav}>
        <Link to="/bets"><button>Bets</button></Link>
      </div>
    </div>
  )
}
