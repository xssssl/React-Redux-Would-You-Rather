import React from 'react'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap'
import avatar from '../assets/avatar2.png'
// import goldMedal from '../assets/gold-medal.png'
// import silverMedal from '../assets/silver-medal.png'
// import bronzeMedal from '../assets/bronze-medal.png'

const Ranking: React.FC = () => {
  return (
    <div className="card mt-4 mb-4">
      <div className="row no-gutters align-middle align-items-center">
        <div className="col-md-3">
          <img src='/assets/gold-medal.png' className="mx-auto d-block img-avatar card-img" />
        </div>
        <div className="col-md-3">
          <img src='/assets/avatar2.png' className="mx-auto d-block img-avatar card-img" alt="avatar" />
        </div>
        <div className="col-md-6">
          <div className="card-body text-center">
            <h4>Curry</h4>
            <hr />
            <p>Created questions: 3</p>
            <p>Answered questions: 2</p>
            <hr />
            <h4>Total scores: 5</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ranking