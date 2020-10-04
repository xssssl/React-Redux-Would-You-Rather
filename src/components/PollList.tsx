import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import Poll, { PollProps } from './Poll'
import RootState from '../types/RootState'
import { Users, Question } from '../services/types'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

interface PollListPropsFromParent {
  isAnswered: boolean
}

export type PollListPropsFromReduxState = Omit<PollProps, 'isAnswered'>

const PollList: React.FC<PollListProps> = (props: PollListProps) => {
  const { isAnswered } = props 
  const polls = props.polls
  return (
    <>
      { polls.map((pollProps: PollListPropsFromReduxState) => {
          return <Poll key={pollProps.questionId} isAnswered={isAnswered} {...pollProps} />
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

export const formatAskedTime = (askedTimestamp: number, currentTimestamp: number = Date.now()): string => {
  const timestampDiffInSeconds: number = Math.ceil((currentTimestamp - askedTimestamp) / 1000)
  const days = Math.floor(timestampDiffInSeconds / 3600 / 24)
  const hours = Math.floor(timestampDiffInSeconds / 3600)
  const minutes = Math.floor(timestampDiffInSeconds / 60)
  var askedTime: string = ''
  if(days) {
    askedTime = days + ((days - 1) ? ' days' : ' day')
  } else if(hours) {
    askedTime = hours + ((hours - 1) ? ' hours' : ' hour')
  } else if(minutes) {
    askedTime = minutes + ((minutes - 1) ? ' minutes' : ' minute')
  } else {
    askedTime = '1 minute'
  }
  return askedTime
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