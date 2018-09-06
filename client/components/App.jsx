import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Bets from './Bets'

const App = () => {
  return (
    <Router>
      <div>
        <div className="container">
          <Route exact path='/bets' component={Bets} />
          <Route exact path='/' component={Home} />
        </div>
      </div>
    </Router>
  )
}

export default App
