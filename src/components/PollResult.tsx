import React from 'react'
import PollFrame from './PollFrame'
import OptionResult from './OptionResult'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const PollResult = () => {
  return (
    <PollFrame displayedAuthor='You' avatarURL='/assets/avatar1.png' askedTime='3 days'>
      <h3 className="card-title">Would you rather</h3>
      <OptionResult />
      <button className="btn btn-success btn-block"><FontAwesomeIcon icon={faArrowLeft} />   Back</button>
    </PollFrame>
  )
}

export default PollResult
