import React from 'react'
import { Link } from 'react-router-dom'
import ProgressBar, { ProgressBarProps } from './ProgressBar'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

interface OptionResultProps {
  isVoteOptionOne: boolean,
  optionOneText: string,
  optionOneVotes: ProgressBarProps,
  optionTwoText: string,
  optionTwoVotes: ProgressBarProps
}

const OptionResult: React.FC<OptionResultProps> = (props) => {
  const { 
    isVoteOptionOne,
    optionOneText, optionOneVotes,
    optionTwoText, optionTwoVotes
   } = props
  return (
    <>
      <h3 className="card-title">Would you rather</h3>
      <div className={isVoteOptionOne ? "card border-danger text-danger" : "card"}>
        {
          isVoteOptionOne && 
            <div className="card-header">
              <h3 data-testid='option-one-voted'><FontAwesomeIcon icon={faCheckCircle} /> Your Vote</h3>
            </div>
        }
        <div className="card-body">
          <h4 className="mb-4">{optionOneText}</h4>
          <ProgressBar obtainedVotes={optionOneVotes.obtainedVotes} totalVotes={optionOneVotes.totalVotes} />
        </div>
      </div>
      <br />
      <div className={!isVoteOptionOne ? "card border-danger text-danger" : "card"}>
        {
          !isVoteOptionOne && 
            <div className="card-header">
              <h3 data-testid='option-two-voted'><FontAwesomeIcon icon={faCheckCircle} /> Your Vote</h3>
            </div>
        }
        <div className="card-body">
          <h4 className="mb-4">{optionTwoText}</h4>
          <ProgressBar obtainedVotes={optionTwoVotes.obtainedVotes} totalVotes={optionTwoVotes.totalVotes} />
        </div>
      </div>
      <br />
      <Link to='/'>
        <button className="btn btn-primary btn-block"><FontAwesomeIcon icon={faArrowLeft} />   Back</button>
      </Link>
    </>
  )
}

export default OptionResult