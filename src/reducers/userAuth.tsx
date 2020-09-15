import { ACTION_TYPES } from '../actions/constants'
import { userAuthActionType, userAuthStateType } from '../types/userAuthTypes'

const initState: userAuthStateType = {
  isAuth: false
}

export const userAuth = (status = initState, action: userAuthActionType): userAuthStateType => {
  switch(action.type) {
    case ACTION_TYPES.LOGIN:
      return {
        isAuth: true,
        id: action.id
      }
    case ACTION_TYPES.LOGOUT:
      return {
        isAuth: false,
        id: ''
      }
    default:
      return status
        
  }
}