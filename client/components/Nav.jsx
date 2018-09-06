import React from 'react'

import {Link} from 'react-router-dom'

export default function Header (props) {
  const styles = {
    padding: '2%',
    background: 'rgb(108, 179, 108)',
    color: 'white'
  }
  return (
    <div style={styles}>
      <div className="row">
        <Link to="/bets"><button>Bets</button></Link>
      </div>
    </div>
  )
}
