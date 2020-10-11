import React from 'react'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap'
// import avatar from '../assets/avatar2.png'
// import goldMedal from '../assets/gold-medal.png'
// import silverMedal from '../assets/silver-medal.png'
// import bronzeMedal from '../assets/bronze-medal.png'

export const Medal = ['gold', 'silver', 'bronze'] as const

export interface RankingProps {
  displayedAuthor: string,
  avatarURL: string,
  ranking: typeof Medal[number],
  createdQuestions: number,
  answeredQuestions: number
}

const medalImgPaths = {
  gold: '../assets/gold-medal.png',
  silver: '../assets/silver-medal.png',
  bronze: '../assets/bronze-medal.png'
}

const Ranking: React.FC<RankingProps> = (props) => {
  const { displayedAuthor, avatarURL, ranking, createdQuestions, answeredQuestions } = props
  return (
    <div className="card mt-4 mb-4">
      <div className="row no-gutters align-middle align-items-center">
        <div className="col-md-3">
          <img src={medalImgPaths[ranking]} className="mx-auto d-block img-avatar card-img" alt="medal" />
        </div>
        <div className="col-md-3">
          <img src={avatarURL} className="mx-auto d-block img-avatar card-img" alt="avatar" />
        </div>
        <div className="col-md-6">
          <div className="card-body text-center">
            <h4>{displayedAuthor}</h4>
            <hr />
            <p>{'Created questions: ' + createdQuestions}</p>
            <p>{'Answered questions: ' + answeredQuestions}</p>
            <hr />
            <h4>{'Total scores: ' + (createdQuestions + answeredQuestions)}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ranking