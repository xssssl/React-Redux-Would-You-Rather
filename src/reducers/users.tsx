import { Reducer } from 'redux'
import { CreateAnswerRequest, CreateQuestionRequest, Users } from '../services/types'
import { USERS_ACTION_TYPES } from '../actions/constants'
import { UserAction, UsersState, FetchDataAction, AddAnswerAction } from '../types/UsersTypes'

const users: Reducer<UsersState, UserAction> = (state = {}, action: UserAction): UsersState => {
  switch(action.type) {
    case USERS_ACTION_TYPES.FETCH_USERS_DATA:
      let fetchUsersDataAction = action as FetchDataAction
      return {
        ...fetchUsersDataAction.users
      }
    case USERS_ACTION_TYPES.ADD_ANSWER:
      const { authedUser, qid, answer } = action as AddAnswerAction
      return state
    case USERS_ACTION_TYPES.ADD_QUESTION:
      return state
    default:
      return state
  }
}

export default users