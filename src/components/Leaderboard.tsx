import React from 'react'
import RankingList from './RankingList'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

const Leaderboard: React.FC = (props: any) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4 offset-sm-4">
          <RankingList />
        </div>
      </div>
    </div>
  )
}

export default Leaderboard