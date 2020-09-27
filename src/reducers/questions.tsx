import { Reducer } from 'redux'
import { QUESTIONS_ACTION_TYPES } from '../actions/constants'
import { 
  QuestionAction, 
  QuestionState, 
  FetchDataSuccessAction, 
  AddVoteAction, 
  AddQuestionAction 
} from '../types/QuestionsTypes'

const initState: QuestionState = {
  isLoading: false,
  data: {}
}

const questions: Reducer<QuestionState, QuestionAction> = (
    state = initState, action: QuestionAction): QuestionState => {
  switch(action.type) {
    case QUESTIONS_ACTION_TYPES.FETCH_QUESTIONS_DATA:
      return {
        ...state,
        isLoading: true
      }
    case QUESTIONS_ACTION_TYPES.FETCH_QUESTIONS_DATA_SUCCESS:
      const { data, timestamp} = action as FetchDataSuccessAction
      return {
        ...state,
        isLoading: false,
        timestamp,
        data
      }
    case QUESTIONS_ACTION_TYPES.FETCH_QUESTIONS_DATA_FAIL:
      return {
        ...state,
        isLoading: false
      }
    case QUESTIONS_ACTION_TYPES.ADD_VOTE: {
      const { authedUser, qid, answer } = action as AddVoteAction
      return {
        ...state,
        data: {
          ...state.data,
          [qid]: {
            ...state.data[qid],
            [answer]: {
              ...state.data[qid][answer],
              votes: state.data[qid][answer].votes.concat([authedUser])
            }
          }
        }
      }
    }
    case QUESTIONS_ACTION_TYPES.ADD_QUESTION: {
      const { question } = action as AddQuestionAction
      return {
        ...state,
        data: {
          ...state.data,
          [question.id]: question
        }
      }
    }
    default:
      return state
  }
}

export default questions