import React from 'react'

import {Link} from 'react-router-dom'

export default function Home (props) {
  const header = {
    padding: '2%',
    background: 'navy',
    color: 'white'
  }
  const nav = {
    padding: '2%',
    background: 'green',
    color: 'white'
  }
  return (
    <div>
      <div style={header}>
        <h1>Raro Punt Club</h1>
      </div>
      <div style={nav}>
        <Link to="/bets"><button>Bets</button></Link>
      </div>
    </div>
  )
}
