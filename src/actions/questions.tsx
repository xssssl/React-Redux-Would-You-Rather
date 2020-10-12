import { Action, ActionCreator } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { QUESTIONS_ACTION_TYPES } from './constants'
import { CreateAnswerRequest, Question } from '../services/types'
import { getInitQuestions } from '../services/apis'
import { QuestionAction, QuestionState, FetchDataSuccessActionParams } from '../types/QuestionsTypes'

export const addVote: ActionCreator<Action<string>> = (
  { authedUser, qid, answer }: CreateAnswerRequest): QuestionAction => ({
  type: QUESTIONS_ACTION_TYPES.ADD_VOTE,
  authedUser,
  qid,
  answer
})

// export const addQuestion: ActionCreator<Action<string>> = (
//   question: Question): QuestionAction => ({
//   type: QUESTIONS_ACTION_TYPES.ADD_QUESTION,
//   question
// })

export const addQuestion = (
  question: Question): QuestionAction => {
  return {
    type: QUESTIONS_ACTION_TYPES.ADD_QUESTION,
    question
  }
}

export const fetchQuestionsData = (): QuestionAction => ({
  type: QUESTIONS_ACTION_TYPES.FETCH_QUESTIONS_DATA
})

export const fetchQuestionsDataSuccess = (
  { data, timestamp }: FetchDataSuccessActionParams): QuestionAction => ({
  type: QUESTIONS_ACTION_TYPES.FETCH_QUESTIONS_DATA_SUCCESS,
  data,
  timestamp
})

export const fetchQuestionsDataFail = (): QuestionAction => ({
  type: QUESTIONS_ACTION_TYPES.FETCH_QUESTIONS_DATA_FAIL
})

export const handleFetchQuestionsData = ():
  ThunkAction<Promise<void>, QuestionState, unknown, QuestionAction> => {
    return (dispatch: ThunkDispatch<QuestionState, unknown, QuestionAction>): Promise<void> => {
      dispatch(fetchQuestionsData())
      return getInitQuestions().then(data => {
        dispatch(fetchQuestionsDataSuccess({ data, timestamp: Date.now()}))
      }).catch(error => {
        console.log(error)
        dispatch(fetchQuestionsDataFail())
      })
    }
}