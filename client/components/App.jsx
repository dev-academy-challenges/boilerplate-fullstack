import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Bets from './Bets'
import Addbet from './AddBet'
import Members from './Members'
import Datacheck from './DataCheck'
import Summary from './Summary'
import Leaderboard from './Leaderboard'

const App = () => {
  return (
    <Router>
      <div>
        <div className="container-fluid">
          <Route path='/bets' component={Bets} />
          <Route exact path='/' component={Home} />
          <Route exact path='/' component={Summary}/>
          <Route path='/addbet' component={Addbet}/>
          <Route path='/members' component={Members}/>
          <Route path='/datacheck' component={Datacheck}/>
          <Route exact path='/' component={Leaderboard}/>
        </div>
      </div>
    </Router>
  )
}

export default App
