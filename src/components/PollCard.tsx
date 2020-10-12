import React from 'react'
import PollFrame from './PollFrame'
import Question from './Question'
import { PollFrameComponentProps } from './PollFrame'
import  { QuestionProps } from './Question'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap'

export type PollCardProps = PollFrameComponentProps & QuestionProps

const PollCard: React.FC<PollCardProps> = (props: PollCardProps) => {
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

export default PollCard
