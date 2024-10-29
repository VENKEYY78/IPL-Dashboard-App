import {Component} from 'react'

import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      result,
      secondInnings,
      umpires,
      venue,
    } = latestMatchDetails

    //  console.log(matchStatus)

    return (
      <div className="latest-match-main-bg-contianer">
        <h1>Latest Matches</h1>
        <div className="latest-match-container">
          <div className="container-01">
            <p>{competingTeam}</p>
            <p>{date}</p>
            <p>{venue}</p>
            <p>{result}</p>
          </div>
          <div className="container-02">
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="logo"
            />
          </div>
          <div className="container-03">
            <h1>First Innings</h1>
            <p>{firstInnings}</p>
            <h1>Second Innings</h1>
            <p>{secondInnings}</p>
            <h1>Man of the Match</h1>
            <p>{manOfTheMatch}</p>
            <h1>Umpires</h1>
            <p>{umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
