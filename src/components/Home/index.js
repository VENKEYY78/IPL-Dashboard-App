import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getAllIplTeams()
  }

  getAllIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    //  console.log(data)

    const updatedData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({
      teamsData: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {teamsData, isLoading} = this.state

    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="Home-bg-container">
            <div className="ipl-logo-heading">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="ipl-heading">IPL Dashboard</h1>
            </div>
            <ul className="Team-list-card-container">
              {teamsData.map(eachIplTeam => (
                <TeamCard eachTeamDetails={eachIplTeam} key={eachIplTeam.id} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default Home
