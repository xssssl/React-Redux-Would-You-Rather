import { Reducer } from 'redux'
import { USERS_ACTION_TYPES } from '../actions/constants'
import { UserAction, UsersState, FetchDataAction } from '../types/UsersTypes'

const users: Reducer<UsersState, UserAction> = (state = {}, action: UserAction): UsersState => {
  switch(action.type) {
    case USERS_ACTION_TYPES.FETCH_USERS_DATA:
      let fetchUsersDataAction = action as FetchDataAction
      return {
        ...fetchUsersDataAction.users
      }
    default:
      return state
  }
}

export default users