import { Action, ActionCreator } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { QUESTIONS_ACTION_TYPES } from './constants'
import { CreateAnswerRequest, CreateQuestionRequest, Users } from '../services/types'
import { getInitQuestions } from '../services/apis'
import { UserAction, UsersState } from '../types/UsersTypes'

export const addVote: ActionCreator<Action<string>> = (
  { authedUser, qid, answer }: CreateAnswerRequest): UserAction => ({
  type: QUESTIONS_ACTION_TYPES.ADD_VOTE,
  authedUser,
  qid,
  answer
})

// export const addQuestion: ActionCreator<Action<string>> = (
//   question: CreateQuestionRequest): UserAction => ({
//   type: USERS_ACTION_TYPES.ADD_QUESTION,
//   question
// })

// export const fetchUsersData: ActionCreator<Action<string>> = (users: Users): UserAction => ({
//   type: USERS_ACTION_TYPES.FETCH_USERS_DATA,
//   users
// })

// export const handleFetchUsersData = ():
//   ThunkAction<Promise<void>, UsersState, unknown, UserAction> => {
//     return (dispatch: ThunkDispatch<UsersState, unknown, UserAction>): Promise<void> => {
//       return getInitUsers().then(data => {
//         dispatch(fetchUsersData(data))
//       }).catch(error => console.log(error))
//     }
// }