import './index.css'

const MatchCard = props => {
  const {eachRecentMatchDetails} = props
  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = eachRecentMatchDetails

  const textColor = matchStatus === 'Won' ? 'green' : 'red'

  console.log(textColor)

  return (
    <li className="l1">
      <div className="match-card-continer">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="logo"
        />
        <div className="div1">
          <p className="competing">{competingTeam}</p>
          <p className="result">{result}</p>
          <p className={`match-status ${textColor}`}>{matchStatus}</p>
        </div>
      </div>
    </li>
  )
}

export default MatchCard
