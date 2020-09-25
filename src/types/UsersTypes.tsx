import { USERS_ACTION_TYPES } from '../actions/constants'
import { Users } from '../services/types'

export interface AddAnswerAction {
  type: typeof USERS_ACTION_TYPES.ADD_ANSWER,
  authedUser: string,
  qid: string,
  answer: 'optionOne' | 'optionTwo'
}

export interface AddQuestionActionParams {
  authedUser: string,
  qid: string
}

export type AddQuestionAction = AddQuestionActionParams & {
  type: typeof USERS_ACTION_TYPES.ADD_QUESTION
}

export interface FetchDataAction {
  type: typeof USERS_ACTION_TYPES.FETCH_USERS_DATA
}

export interface ReceiveDataActionParams {
  data: Users,
  timestamp: number
}

export type ReceiveDataAction = ReceiveDataActionParams & {
  type: typeof USERS_ACTION_TYPES.RECEIVE_USERS_DATA,
}

export type UserAction = AddAnswerAction | AddQuestionAction | FetchDataAction | ReceiveDataAction

interface DataLoadState {
  isLoading: boolean,
  timestamp?: number
}

export type UserState = DataLoadState & {
  data: Users
}