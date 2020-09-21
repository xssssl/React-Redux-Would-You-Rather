import { CreateQuestionRequest, Users } from '../services/types'

interface AddAnswerAction {
  type: string,
  authedUser: string,
  qid: string,
  answer: 'optionOne' | 'optionTwo'
}

interface AddQuestionAction {
  type: string,
  question: CreateQuestionRequest
}

export interface FetchDataAction {
  type: string
  users: Users
}

interface ReceiveDataAction {
  type: string
}

export type UserAction = FetchDataAction | AddAnswerAction | AddQuestionAction | FetchDataAction | ReceiveDataAction


export type UsersState = Users