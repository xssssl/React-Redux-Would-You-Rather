import React from 'react'
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
          <a className="nav-link active" href="/">Home</a>
          <a className="nav-link" href="/newpoll">New Poll</a>
          <a className="nav-link" href="/leaderboard">Leaderboard</a>
        </div>
        <div className="navbar-nav">
          <a className="nav-link" href="/leaderboard">James Logout</a>
        </div>
      </div>
    </nav> 
  )
}


export default Nav