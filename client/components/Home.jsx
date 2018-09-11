import React from 'react'

import {Link} from 'react-router-dom'

export default function Home (props) {
  return (
    <div className="container-fluid">

      <div className="header">
        <h1>Raro Punt Club</h1>
      </div>
      <div className="nav">
        <Link to="/bets"><button>Bets</button></Link>
        <Link to="/members"><button>Members</button></Link>
      </div>
    </div>
  )
}
