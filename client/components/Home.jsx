import React from 'react'

import {Link} from 'react-router-dom'

export default function Home (props) {
  return (
    <div className="container">

      <div className="header">
        <h1>Raro Punt Club</h1>
      </div>
      <div className="nav">
        <Link to="/bets"><button>Bets</button></Link>
      </div>
    </div>
  )
}
