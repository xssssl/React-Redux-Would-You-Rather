import React, { useState, BaseSyntheticEvent } from 'react'
import { HandleThunkActionCreator } from 'react-redux'
import { handleAddAnswer } from '../actions/shared'
import { Answer } from '../services/types'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVoteYea } from '@fortawesome/free-solid-svg-icons'

const OPTION_VALUE = {
  OPTION_ONE: 'optionOne',
  OPTION_TWO: 'optionTwo'
}

export interface VoteProps {
  authedUser: string,
  qid: string,
  optionOneText: string,
  optionTwoText: string,
  handleAddAnswer: HandleThunkActionCreator<typeof handleAddAnswer>
}

const Vote: React.FC<VoteProps> = (props) => {
  const { optionOneText, optionTwoText, authedUser, qid } = props
  const { handleAddAnswer } = props
  const [selectedOption, setSelectedOption] = useState(OPTION_VALUE.OPTION_ONE)

  const handleOnClick = (event: BaseSyntheticEvent) => {
    event.preventDefault()
    handleAddAnswer({
      authedUser,
      qid,
      answer: selectedOption as Answer
    })
  }

  return (
    <>
      <h3 className="card-title">Would you rather</h3>
      <form>
        <div className="form-check text-left align-middle mt-3">
          <input 
            className="form-check-input" 
            type="radio" 
            name="voteOptionRadios" 
            id="optionOneRadio"
            data-testid="optionOneRadio"
            value={OPTION_VALUE.OPTION_ONE}
            defaultChecked
            onChange={event => setSelectedOption(event.target.value)} 
          />
          <label className="form-check-label" htmlFor="optionOneRadio">
            <h4>{optionOneText}</h4>
          </label>
        </div>
        <div className="form-check text-left align-middle mt-3">
          <input 
            className="form-check-input" 
            type="radio" 
            name="voteOptionRadios" 
            id="optionTwoRadio"
            data-testid="optionTwoRadio"
            value={OPTION_VALUE.OPTION_TWO}
            onChange={event => setSelectedOption(event.target.value)} 
          />
          <label className="form-check-label" htmlFor="optionTwoRadio">
            <h4>{optionTwoText}</h4>
          </label>
        </div>
        <button 
          className="btn btn-success btn-block mt-3" 
          data-testid='vote-btn'
          onClick={event => handleOnClick(event)}
        >
          <FontAwesomeIcon icon={faVoteYea} /> Vote
        </button>
      </form>
    </>
  )
}

export default Vote