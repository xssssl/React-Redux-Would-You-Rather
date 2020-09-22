import { ActionCreator } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { USERS_ACTION_TYPES } from './constants'
import { CreateAnswerRequest, CreateQuestionRequest, Users } from '../services/types'
import { getInitUsers } from '../services/apis'
import { UserAction, UsersState } from '../types/UsersTypes'

export const addAnswerToUser: ActionCreator<UserAction> = (
  { authedUser, qid, answer }: CreateAnswerRequest): UserAction => ({
  type: USERS_ACTION_TYPES.ADD_ANSWER,
  authedUser,
  qid,
  answer
})

export const addQuestionToUser: ActionCreator<UserAction> = (
  question: CreateQuestionRequest): UserAction => ({
  type: USERS_ACTION_TYPES.ADD_QUESTION,
  question
})

export const fetchUsersData: ActionCreator<UserAction> = (users: Users): UserAction => ({
  type: USERS_ACTION_TYPES.FETCH_USERS_DATA,
  users
})

export const handleFetchUsersData = ():
  ThunkAction<Promise<void>, UsersState, unknown, UserAction> => {
    return (dispatch: ThunkDispatch<UsersState, unknown, UserAction>): Promise<void> => {
      return getInitUsers().then(data => {
        dispatch(fetchUsersData(data))
      }).catch(error => console.log(error))
    }
}