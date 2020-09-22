import { Action } from 'redux'
import { CreateQuestionRequest, Users } from '../services/types'

export interface AddAnswerAction extends Action<string> {
  authedUser: string,
  qid: string,
  answer: 'optionOne' | 'optionTwo'
}

interface AddQuestionAction extends Action<string> {
  question: CreateQuestionRequest
}

export interface FetchDataAction extends Action<string> {
  users: Users
}

export type UserAction = AddAnswerAction | AddQuestionAction | FetchDataAction


export type UsersState = Users