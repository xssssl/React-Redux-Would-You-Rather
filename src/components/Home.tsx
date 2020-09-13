import React from 'react'
import PollList from './PollList'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

const Home: React.FC = (props: any) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 offset-sm-3 mt-3">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">Unanswered</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Answered</a>
            </li>
          </ul>
          <div className="pl-2 pr-2">
            <PollList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home