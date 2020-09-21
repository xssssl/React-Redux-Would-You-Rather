import { Reducer } from 'redux'
import { USERAUTH_ACTION_TYPES } from '../actions/constants'
import { UserAuthAction, UserAuthState } from '../types/UserAuthTypes'

const initState: UserAuthState = {
  isAuthenticated: false,
  id: ''
}

const userAuth: Reducer<UserAuthState, UserAuthAction> = (state = initState, action) => {
  switch(action.type) {
    case USERAUTH_ACTION_TYPES.LOGIN:
      return {
        isAuthenticated: true,
        id: action.id
      }
    case USERAUTH_ACTION_TYPES.LOGOUT:
      return {
        isAuthenticated: false,
        id: ''
      }
    default:
      return state
  }
}

export default userAuth