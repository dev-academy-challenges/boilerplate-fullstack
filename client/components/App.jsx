import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Bets from './Bets'
import Addbet from './AddBet'
import Members from './Members'

const App = () => {
  return (
    <Router>
      <div>
        <div className="container">
          <Route path='/bets' component={Bets} />
          <Route exact path='/' component={Home} />
          <Route path='/addbet' component={Addbet}/>
          <Route path='/members' component={Members}/>
        </div>
      </div>
    </Router>
  )
}

export default App
