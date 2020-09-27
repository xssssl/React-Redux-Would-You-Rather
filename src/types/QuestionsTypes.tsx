import { QUESTIONS_ACTION_TYPES } from '../actions/constants'
import { Question, Questions } from '../services/types'

export interface AddVoteAction {
  type: typeof QUESTIONS_ACTION_TYPES.ADD_VOTE,
  authedUser: string,
  qid: string,
  answer: 'optionOne' | 'optionTwo'
}

export interface AddQuestionAction {
  type: typeof QUESTIONS_ACTION_TYPES.ADD_QUESTION,
  question: Question
}

export interface FetchDataAction {
  type: typeof QUESTIONS_ACTION_TYPES.FETCH_QUESTIONS_DATA
}

export interface FetchDataSuccessActionParams {
  data: Questions,
  timestamp: number
}

export type FetchDataSuccessAction = FetchDataSuccessActionParams & {
  type: typeof QUESTIONS_ACTION_TYPES.FETCH_QUESTIONS_DATA_SUCCESS,
}

export interface FetchDataFailAction {
  type: typeof QUESTIONS_ACTION_TYPES.FETCH_QUESTIONS_DATA_FAIL
}

export type QuestionAction = | AddVoteAction
                             | AddQuestionAction
                             | FetchDataAction 
                             | FetchDataSuccessAction 
                             | FetchDataFailAction

interface DataLoadState {
  isLoading: boolean,
  timestamp?: number
}

export type QuestionState = DataLoadState & {
  data: Questions
}