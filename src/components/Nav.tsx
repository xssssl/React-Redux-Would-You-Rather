import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import brandLogo from '../assets/logo1.png'

const Nav: React.FC = (props: any) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <a className="navbar-brand" href="/">
        <img src={brandLogo} width="40" height="40" alt="would you rather" 
          loading="lazy" />
      </a>
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
          <NavLink className="nav-link" to="/leaderboard">James Logout</NavLink>
        </div>
      </div>
    </nav> 
  )
}


export default Nav