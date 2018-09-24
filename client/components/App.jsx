import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Bets from './Bets'
import Addbet from './AddBet'
import Members from './Members'
import Datacheck from './DataCheck'
import Leaderboard from './Leaderboard'
import Test from './Test'
import Test2 from './Test2'
import EditBet from './EditBet'
import Home from './Home'

const App = () => {
  return (
    <Router>
      <div>
        <div className="container-fluid">
          <Route exact path='/' component={Home} />
          <Route path='/bets' component={Bets} />
          <Route path='/addbet' component={Addbet}/>
          <Route path='/members' component={Members}/>
          <Route path='/datacheck' component={Datacheck}/>
          <Route exact path='/' component={Leaderboard}/>
          <Route exact path='/datacheck' component={Test}/>
          <Route exact path='/datacheck' component={Test2}/>
          <Route exact path='/editbet' component={EditBet}/>
        </div>
      </div>
    </Router>
  )
}

export default App

// import ErrorMessage from './ErrorMessage'
// import LoadSubreddit from './LoadSubreddit'
// import SubredditList from './SubredditList'
// import WaitIndicator from './WaitIndicator'

// const App = () => (
//   <div className='app'>
//     <ErrorMessage />
//     <LoadSubreddit />
//     <WaitIndicator />
//     <SubredditList />
//   </div>
// )

// export default App
