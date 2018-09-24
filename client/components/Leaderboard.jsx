import React from 'react'

import {getBets} from '../apiClient'

class Leaderboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bets: []
    }
    this.fetchBets = this.fetchBets.bind(this)
  }

  componentDidMount () {
    this.fetchBets()
  }

  fetchBets () {
    return getBets()
      .then(bets => {
        this.setState({bets: bets})
      })
  }

  render () {
    return (
      <div className="container-fluid">

        <div className="row">

          <div className="col-md-2">
          </div>

          <div className="col-md-8">
            <h4 className="heading">Top 3 Bets</h4>

            <div className="row">

              <div className="col-md-2">
                <h5 className="small-heading">Rank</h5>
              </div>

              <div className="col-md-2">
                <h5 className="small-heading">Couple</h5>
              </div>

              <div className="col-md-2">
                <h5 className="small-heading">Bet</h5>
              </div>

              <div className="col-md-2">
                <h5 className="small-heading">$ Bet</h5>
              </div>

              <div className="col-md-2">
                <h5 className="small-heading">$ Won</h5>
              </div>

              <div className="col-md-2">
                <h5 className="small-heading">%</h5>
              </div>

            </div></div>

          <div className="col-md-2">
          </div>

        </div>

      </div>
    )
  }
}

export default Leaderboard
