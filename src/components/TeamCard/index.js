import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeamDetails} = props
  const {id, name, teamImageUrl} = eachTeamDetails

  //  console.log(name)

  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <li className="eachTeamCardContainer">
        <div className="team-info">
          <img src={teamImageUrl} className="team-logo" alt={name} />
          <p className="team-name">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
