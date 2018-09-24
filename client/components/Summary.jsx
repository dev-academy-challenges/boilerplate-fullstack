import React from 'react'

import {getBets} from '../apiClient'

class Summary extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bets: []
    }
    this.fetchBets = this.fetchBets.bind(this)
    this.percentColour = this.percentColour.bind(this)
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

  percentColour (betPercentage) {
    const red = {background: '#EE3239', color: 'white'}
    const yellow = {background: '#FEC748', color: 'white'}
    const green = {background: '#499360', color: 'white'}
    const purple = {background: '#632A7E', color: 'white'}

    if (betPercentage < 50) {
      return red
    } else if (betPercentage < 100) {
      return yellow
    } else if (betPercentage < 200) {
      return green
    } else if (betPercentage > 200) {
      return purple
    } else {
      return red
    }
  }

  render () {
    // This removes the duplicates from the list to give
    // // just the couples
    // const couples = [...new Set(couplesAll)].map(couple => {
    //   return couple.couple
    // })
    const arr = this.state.bets.map(summary => {
      const betAmountRound = Number(summary.amountBet).toFixed(2)
      const betAmountWon = Number(summary.amountWon).toFixed(2)
      return {
        couple: summary.couple,
        amountBet: betAmountRound,
        amountWon: isNaN(betAmountWon) ? Number(0).toFixed(2) : betAmountWon
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

    // To sum up amount won by Bielby/Hart

    const x = arr.map(bh => {
      if (bh.couple === 'Bielby/Hart') {
        return bh.amountWon++
      } else {
        return 0
      }
    })
    const bielbyHartWins = x.reduce((a, b) => a + b, 0)
    const bielbyHartWinsPercent = Number((bielbyHartWins / bielbyHartBets) * 100).toFixed(2)
    // To sum up amount bet by Scaglia's

    const scaglias = arr.map(ss => {
      if (ss.couple === `Scaglia/Scaglia`) {
        return ss.amountBet++
      } else {
        return 0
      }
    })
    const scagliasBets = scaglias.reduce((a, b) => a + b, 0)

    // To sum up amount won by Scaglia's

    const scagliasWon = arr.map(ss => {
      if (ss.couple === `Scaglia/Scaglia`) {
        return ss.amountWon++
      } else {
        return 0
      }
    })
    const scagliasBetsWon = scagliasWon.reduce((a, b) => a + b, 0)
    const scagliasBetsWonPercent = Number((scagliasBetsWon / scagliasBets) * 100).toFixed(2)
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
    const bsWonsPercent = Number(bsWons).toFixed(2)

    return (
      <div className="container-fluid">

        <div className="row">

          <div className="col-md-2">
          </div>

          <div className="col-md-8">
            <h4 className="small-heading">Summary</h4>

            <div className="row">

              <div className="col-md-3">
                <h5 className="heading">Couples</h5>
                <h6>Bielby/Hart</h6>
                <h6>Scaglia'/s</h6>
                <h6>Burningham/Sim</h6>
              </div>

              <div className="col-md-3">
                <h5 className="heading">Amount Bet</h5>
                <h6>${Number(bielbyHartBets).toFixed(2)}</h6>
                <h6>${Number(scagliasBets).toFixed(2)}</h6>
                <h6>${Number(bsBets).toFixed(2)}</h6>
              </div>

              <div className="col-md-3">
                <h5 className="heading">Amount Won</h5>
                <h6>${Number(bielbyHartWins).toFixed(2)}</h6>
                <h6>${Number(scagliasBetsWon).toFixed(2)}</h6>
                <h6>${Number(bsWons).toFixed(2)}</h6>
              </div>

              <div className="col-md-3">
                <h5 className="heading">Percentage</h5>
                <h6 style={this.percentColour(bielbyHartWinsPercent)}>{bielbyHartWinsPercent}%</h6>
                <h6 style={this.percentColour(scagliasBetsWonPercent)}>{scagliasBetsWonPercent}%</h6>
                <h6 style={this.percentColour(bsWonsPercent)}>{bsWonsPercent}%</h6>
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
