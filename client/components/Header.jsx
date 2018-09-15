import React from 'react'

import {Link} from 'react-router-dom'

export default function Header (props) {
  return (
    <div className="container-fluid">

      <div className="header">
        <h1>Raro Punt Club</h1>
      </div>
      <div className="nav">
        <Link to="/"><button>Home</button></Link>
        <Link to="/bets"><button>Bets</button></Link>
        <Link to="/bets2"><button>Bets2</button></Link>
        <Link to="/members"><button>Members</button></Link>
        <Link to="/datacheck"><button>Data Check</button></Link>
      </div>
    </div>
  )
}
