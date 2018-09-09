import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Bets from './Bets'
import Addbet from './AddBet'

const App = () => {
  return (
    <Router>
      <div>
        <div className="container">
          <Route path='/bets' component={Bets} />
          <Route exact path='/' component={Home} />
          <Route path='/addbet' component={Addbet}/>
        </div>
      </div>
    </Router>
  )
}

export default App
