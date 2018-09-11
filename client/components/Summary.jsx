import React from 'react'

import {getBets} from '../apiClient'

class Summary extends React.Component {
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
    // This removes the duplicates from the list to give
    // // just the couples
    // const couples = [...new Set(couplesAll)].map(couple => {
    //   return couple.couple
    // })

    const arr = this.state.bets.map(summary => {
      const a = Number(summary.amountBet).toFixed(2)
      const b = Number(summary.amountWon).toFixed(2)
      const c = isNaN(b) ? Number(0).toFixed(2) : b
      return {
        couple: summary.couple,
        amountBet: a,
        amountWon: c
      }
    })

    // To sum up amount bet by Bielby/Hart

    const bielbyHart = arr.map(bh => {
      if (bh.couple === 'Bielby/Hart') {
        return bh.amountBet++
      } else {
        return 0
      }
    })
    const bielbyHartBets = bielbyHart.reduce((a, b) => a + b, 0)
    console.log(bielbyHartBets)

    // To sum up amount won by Bielby/Hart

    const x = arr.map(bh => {
      if (bh.couple === 'Bielby/Hart') {
        return bh.amountWon++
      } else {
        return 0
      }
    })
    const bielbyHartWins = x.reduce((a, b) => a + b, 0)
    console.log(bielbyHartWins)

    // To sum up amount bet by Scaglia's

    const scaglias = arr.map(ss => {
      if (ss.couple === `Scaglia/Scaglia`) {
        return ss.amountBet++
      } else {
        return 0
      }
    })
    const scagliasBets = scaglias.reduce((a, b) => a + b, 0)
    console.log(scagliasBets)

    // To sum up amount won by Scaglia's

    const scagliasWon = arr.map(ss => {
      if (ss.couple === `Scaglia/Scaglia`) {
        return ss.amountWon++
      } else {
        return 0
      }
    })
    const scagliasBetsWon = scagliasWon.reduce((a, b) => a + b, 0)
    console.log(scagliasBets)

    // To sum up amount bet by Burnginham's

    const bsBet = arr.map(bs => {
      if (bs.couple === `Burningham/Sim`) {
        return bs.amountBet++
      } else {
        return 0
      }
    })
    const bsBets = bsBet.reduce((a, b) => a + b, 0)

    // To sum up amount won by Burningham/Sim

    const bsWon = arr.map(bs => {
      if (bs.couple === `Burningham/Sim`) {
        return bs.amountBet++
      } else {
        return 0
      }
    })
    const bsWons = bsWon.reduce((a, b) => a + b, 0)

    return (
      <div className="container-fluid">

        <div className="row">

          <div className="col-md-2">
          </div>

          <div className="col-md-8">
            <h4 className="small-heading">Summary</h4>

            <div className="row">

              <div className="col-md-3">
                <h5>Couples</h5>
                <h6>Bielby/Hart</h6>
                <h6>Scaglia's</h6>
                <h6>Burningham/Sim</h6>
              </div>

              <div className="col-md-3">
                <h5>Amount Bet</h5>
                <h6>${Number(bielbyHartBets).toFixed(2)}</h6>
                <h6>${Number(scagliasBets).toFixed(2)}</h6>
                <h6>${Number(bsBets).toFixed(2)}</h6>
              </div>

              <div className="col-md-3">
                <h5>Amount Won</h5>
                <h6>${Number(bielbyHartWins).toFixed(2)}</h6>
                <h6>${Number(scagliasBetsWon).toFixed(2)}</h6>
                <h6>${Number(bsWons).toFixed(2)}</h6>
              </div>

              <div className="col-md-3">
                <h5>Percentage</h5>
                <h6>{Number((bielbyHartWins / bielbyHartBets) * 100).toFixed(2)}%</h6>
                <h6>{Number((scagliasBetsWon / scagliasBets) * 100).toFixed(2)}%</h6>
                <h6>{Number((bsWons / bsBets) * 100).toFixed(2)}%</h6>
              </div>

            </div></div>

          <div className="col-md-2">
          </div>

        </div>

      </div>
    )
  }
}

export default Summary
