import React from 'react'
import PollFrame from './PollFrame'
import Question from './Question'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

const Poll = (props: any) => {
  return (
    <PollFrame>
      <Question />
    </PollFrame>
  )
}

export default Poll