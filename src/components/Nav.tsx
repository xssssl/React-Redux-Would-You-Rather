import React from 'react'
import { ActionCreatorsMapObject } from 'redux'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { userLogout } from '../actions/userAuth'
import { UserAuthAction } from '../types/UserAuthTypes'
import { RootState } from '../types/RootState'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import brandLogo from '../assets/logo1.png'

interface NavState {
  name: string
}

const Nav: React.FC = (props: any) => {
  const { name }: NavState = props
  const { userLogout }: ActionCreatorsMapObject<UserAuthAction> = props

  const handleLogout = () => {
    userLogout()
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <NavLink className="navbar-brand" to="/">
        <img src={brandLogo} width="40" height="40" alt="would you rather" 
          loading="lazy" />
      </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" 
        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse font-weight-bold" id="navbarNavAltMarkup">
        <div className="navbar-nav mr-auto mt-2 mt-lg-0">
          <NavLink className="nav-link" to="/" exact>Home</NavLink>
          <NavLink className="nav-link" to="/newpoll">New Poll</NavLink>
          <NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink>
        </div>
        <div className="navbar-nav">
          {/* <NavLink className="nav-link" to="/login">James Logout</NavLink> */}
          <button className="nav-link btn text-left" onClick={handleLogout}>
            {name + ', Logout'}
          </button>
        </div>
      </div>
    </nav> 
  )
}

const mapStateToProps = (state: RootState): NavState => ({
    name: state.users[state.userAuth.id].name
})

const  mapDispatchToProps: ActionCreatorsMapObject<UserAuthAction> = { userLogout }

const ConnectedNav = connect(mapStateToProps, mapDispatchToProps)(Nav)

export default ConnectedNav