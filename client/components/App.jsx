import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import Bets from './Bets'

const App = () => {
  return (
    <Router>
      <div>
        <div className="container">
          <Route exact path='/bets' component={Bets} />
          <Route exact path='/' component={Home} />
          <Route exact path='/' component={Nav} />
        </div>
      </div>
    </Router>
  )
}

export default App
