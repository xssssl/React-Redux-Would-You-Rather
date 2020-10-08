import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { addAnswerToUser, addQuestionToUser } from './users'
import { addVote, addQuestion } from './questions'
import { saveAnswer, saveQuestion } from '../services/apis'
import { CreateAnswerRequest, CreateQuestionRequest } from '../services/types'
import { UserAction, UserState } from '../types/UsersTypes'
import { QuestionAction, QuestionState } from '../types/QuestionsTypes'

export type UserQuestionCombinedState = {
  users: UserState,
  questions: QuestionState
}

export const handleAddAnswer = ({ authedUser, qid, answer }: CreateAnswerRequest):
  ThunkAction<Promise<void>, UserQuestionCombinedState, unknown, UserAction | QuestionAction> => {
  return (dispatch: ThunkDispatch<UserQuestionCombinedState, unknown, UserAction | QuestionAction>): Promise<void> => {
    return saveAnswer({ authedUser, qid, answer }).then(data => {
      dispatch(addAnswerToUser({ authedUser, qid, answer }))
      dispatch(addVote({ authedUser, qid, answer }))
    }).catch(error => {
      console.log(error)
    })
  }
}

export const handleAddQuestion = (question: CreateQuestionRequest):
  ThunkAction<Promise<void>, UserQuestionCombinedState, unknown, UserAction | QuestionAction> => {
  return (dispatch: ThunkDispatch<UserQuestionCombinedState, unknown, UserAction | QuestionAction>): Promise<void> => {
    return saveQuestion(question).then(formatedQuestion => {
      const authedUser = formatedQuestion.author
      const qid = formatedQuestion.id
      dispatch(addQuestionToUser({ authedUser, qid }))
      dispatch(addQuestion(formatedQuestion))
    }).catch(error => {
      console.log(error)
    })
  }
}

