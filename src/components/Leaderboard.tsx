import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import RankingList, { RankingListProps } from './RankingList'
import { RankingProps, Medal } from './Ranking'
import RootState from '../types/RootState'
import { User, Users } from '../services/types'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap'

const Leaderboard: React.FC<LeaderboardPropsFromRedux> = (props) => {
  const { ranking } = props
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4 offset-sm-4">
          <RankingList ranking={ranking} />
        </div>
      </div>
    </div>
  )
}

export type MapStateToPropsType = RankingListProps

export const sortUserByScores = (users: Users): Array<User> => {
  const userIds = Object.keys(users)
  var userList: Array<User> = userIds.map(uid => users[uid])
  userList.sort((x, y) => (Object.keys(y.answers).length + y.questions.length) 
                          - (Object.keys(x.answers).length + x.questions.length))
  return userList

}

export const formatRanking = (user: User, authedUser: string, index: number): RankingProps => ({
  displayedAuthor: (authedUser === user.id) ? 'You' : user.name,
  avatarURL: user.avatarURL,
  ranking: Medal[index],
  answeredQuestions: Object.keys(user.answers).length,
  createdQuestions: user.questions.length
})

export const mapStateToProps = (state: RootState): MapStateToPropsType => {
  var formatedRankingList: Array<RankingProps> = []

  const sortedUserList = sortUserByScores(state.users.data)
  const sortedUserListTopThree = sortedUserList.slice(0, 3)
  sortedUserListTopThree.forEach((user, index) => {
    formatedRankingList.push(formatRanking(user, state.userAuth.id, index))
  })
  return {
    ranking: formatedRankingList
  }
}

const connector = connect(mapStateToProps)

type LeaderboardPropsFromRedux = ConnectedProps<typeof connector>

const ConnectedLeaderboard = connector(Leaderboard)

export default ConnectedLeaderboard