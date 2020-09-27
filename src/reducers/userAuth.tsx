import { Reducer } from 'redux'
import { USERAUTH_ACTION_TYPES } from '../actions/constants'
import { UserAuthAction, UserAuthState, UserLoginAction } from '../types/UserAuthTypes'

const initState: UserAuthState = {
  isAuthenticated: false,
  id: '',
  token: ''
}

const userAuth: Reducer<UserAuthState, UserAuthAction> = (state = initState, action) => {
  switch(action.type) {
    case USERAUTH_ACTION_TYPES.LOGIN:
      const { id, token } = action as UserLoginAction
      return {
        isAuthenticated: true,
        id,
        token
      }
    case USERAUTH_ACTION_TYPES.LOGOUT:
      return {
        isAuthenticated: false,
        id: '',
        token: ''
      }
    default:
      return state
  }
}

export default userAuth