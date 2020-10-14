import React from 'react'
import { ConnectedProps, connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import PollFrame, { PollFrameComponentProps, formatAskedTime } from './PollFrame'
import { handleAddAnswer } from '../actions/shared'
import Vote from './Vote'
import OptionResult from './OptionResult'
import RootState from '../types/RootState'
import { Question } from '../services/types'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap'

const Poll: React.FC<PollPropsFromRedux> = (props) => {
  const { displayedAuthor, avatarURL, askedTime } = props
  const { isAnswered, authedUser, qid, question } = props
  const { handleAddAnswer } = props

  const optionOneText = question.optionOne.text
  const optionTwoText = question.optionTwo.text

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 offset-sm-3 mt-3">
          <PollFrame 
            displayedAuthor={displayedAuthor}
            avatarURL={avatarURL}
            askedTime={askedTime}
          >
            {
              isAnswered
                ? <OptionResult 
                    isVoteOptionOne={!!~question.optionOne.votes.indexOf(authedUser)}
                    optionOneText={optionOneText}
                    optionOneVotes={{
                      obtainedVotes: question.optionOne.votes.length, 
                      totalVotes: question.optionOne.votes.length + question.optionTwo.votes.length
                    }}
                    optionTwoText={optionTwoText}
                    optionTwoVotes={{
                      obtainedVotes: question.optionTwo.votes.length,
                      totalVotes: question.optionOne.votes.length + question.optionTwo.votes.length
                    }}
                  />
                : <Vote
                    authedUser={authedUser}
                    qid={qid}
                    optionOneText={optionOneText}
                    optionTwoText={optionTwoText}
                    handleAddAnswer={handleAddAnswer}
                  />
            }
          </PollFrame>
        </div>
      </div>
    </div>
  )
}

interface QueryString {
  qid: string
}

export type MapStateToPropsType = PollFrameComponentProps & {
  authedUser: string,
  qid: string,
  question: Question,
  isAnswered: boolean
}

export const mapStateToProps = (state: RootState, 
    ownProps: RouteComponentProps<QueryString>): MapStateToPropsType => {
  const { qid } = ownProps.match.params
  const authedUser = state.userAuth.id
  const question = state.questions.data[qid]
  
  return {
    isAnswered: !!~(question.optionOne.votes.concat(question.optionTwo.votes).indexOf(authedUser)),
    authedUser,
    question,
    qid: qid,
    displayedAuthor: (authedUser === question.author) ? 'You' : state.users.data[question.author].name,
    avatarURL: state.users.data[question.author].avatarURL,
    askedTime: formatAskedTime(question.timestamp)
  }
}

const mapDispatchToProps = { handleAddAnswer }

const connector = connect(mapStateToProps, mapDispatchToProps)

type PollPropsFromRedux = ConnectedProps<typeof connector>

const ConnectedPoll = withRouter(connector(Poll))

export default ConnectedPoll