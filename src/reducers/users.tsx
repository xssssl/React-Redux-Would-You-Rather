import { Reducer } from 'redux'
import { USERS_ACTION_TYPES } from '../actions/constants'
import { 
  UserAction, 
  UserState, 
  FetchDataSuccessAction, 
  AddAnswerAction, 
  AddQuestionAction 
} from '../types/UsersTypes'

const initState: UserState = {
  isLoading: false,
  data: {}
}

const users: Reducer<UserState, UserAction> = (state = initState, action: UserAction): UserState => {
  switch(action.type) {
    case USERS_ACTION_TYPES.FETCH_USERS_DATA:
      return {
        ...state,
        isLoading: true
      }
    case USERS_ACTION_TYPES.FETCH_USERS_DATA_SUCCESS:
      const { data, timestamp} = action as FetchDataSuccessAction
      return {
        ...state,
        isLoading: false,
        timestamp,
        data
      }
    case USERS_ACTION_TYPES.FETCH_USERS_DATA_FAIL:
      return {
        ...state,
        isLoading: false
      }
    case USERS_ACTION_TYPES.ADD_ANSWER: {
      const { authedUser, qid, answer } = action as AddAnswerAction
      return {
        ...state,
        data: {
          ...state.data,
          [authedUser]: {
            ...state.data[authedUser],
            answers: {
              ...state.data[authedUser].answers,
              [qid]: answer
            }
          }
        }
      }
    }
    case USERS_ACTION_TYPES.ADD_QUESTION: {
      const { authedUser, qid } = action as AddQuestionAction
      return {
        ...state,
        data: {
          ...state.data,
          [authedUser]: {
            ...state.data[authedUser],
            questions: state.data[authedUser].questions.concat([qid])
          }
        }
      }
    }
    default:
      return state
  }
}

export default users