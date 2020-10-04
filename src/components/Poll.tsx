import React from 'react'
import PollFrame from './PollFrame'
import Question from './Question'
import { PollFrameComponentProps } from './PollFrame'
import  { QuestionProps } from './Question'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

export type PollProps = PollFrameComponentProps & QuestionProps

const Poll: React.FC<PollProps> = (props: PollProps) => {
  const { 
    displayedAuthor, 
    avatarURL, 
    askedTime, 
    isAnswered, 
    questionId, 
    optionOneText, 
    optionTwoText 
  } = props
  return (
    <PollFrame 
      displayedAuthor={displayedAuthor}
      avatarURL={avatarURL} 
      askedTime={askedTime}
    >
      <Question 
        isAnswered={isAnswered} 
        questionId={questionId}
        optionOneText={optionOneText}
        optionTwoText={optionTwoText}
      />
    </PollFrame>
  )
}

export default Poll
