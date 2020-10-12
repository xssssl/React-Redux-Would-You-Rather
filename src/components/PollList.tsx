import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import PollCard, { PollCardProps } from './PollCard'
import { formatAskedTime } from './PollFrame'
import RootState from '../types/RootState'
import { Users, Question } from '../services/types'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap'

interface PollListPropsFromParent {
  isAnswered: boolean
}

export type PollListPropsFromReduxState = Omit<PollCardProps, 'isAnswered'>

const PollList: React.FC<PollListProps> = (props: PollListProps) => {
  const { isAnswered } = props 
  const polls = props.polls
  return (
    <>
      { polls.map((pollCardProps: PollListPropsFromReduxState) => {
          return <PollCard key={pollCardProps.questionId} isAnswered={isAnswered} {...pollCardProps} />
        }
      )}
    </>
  )
}

export interface mapStateToPropsType {
  polls: Array<PollListPropsFromReduxState>
}

export const sortByTimestampDesc = (questionsList: Array<Question>): Array<Question> => {
  return questionsList.sort((x: Question, y: Question) => {
    const timestampX = x.timestamp
    const timestampY = y.timestamp
    if(timestampX < timestampY) return 1
    else if(timestampX > timestampY) return -1
    else return 0
  })
}

export const formatPollProps = (authorizedUserId: string, question: Question, 
                                users: Users): PollListPropsFromReduxState => {
  const userId = question.author
  return {
    displayedAuthor: (authorizedUserId === userId) ? 'You' : users[userId].name,
    avatarURL: users[userId].avatarURL,
    askedTime: formatAskedTime(question.timestamp),
    questionId: question.id,
    optionOneText: question.optionOne.text,
    optionTwoText: question.optionTwo.text
  }
}

export const mapStateToProps = (state: RootState, ownProps: PollListPropsFromParent): mapStateToPropsType => {
  const { isAnswered } = ownProps
  const authorizedUserId = state.userAuth.id
  const authorizedUser = state.users.data[authorizedUserId]
  const questionIds: Array<string> = Object.keys(state.questions.data).filter(qid => {
    return (Object.keys(authorizedUser.answers).indexOf(qid) >= 0) === isAnswered
  })
  var questionsList: Array<Question> = []
  questionIds.forEach((qid) => {
    questionsList.push(state.questions.data[qid])
  })
  // Latest first, earliest last
  const sortedQuestionsList = sortByTimestampDesc(questionsList)
  const formatedPollProps = sortedQuestionsList.map((question: Question): PollListPropsFromReduxState => {
    return formatPollProps(authorizedUserId, question, state.users.data)
  })
  return { polls: formatedPollProps }
}

const connector = connect(mapStateToProps)

type PollListPropsFromRedux = ConnectedProps<typeof connector>

type PollListProps = PollListPropsFromParent & PollListPropsFromRedux

const ConnectedPollList = connector(PollList)

export default ConnectedPollList