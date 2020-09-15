import { ACTION_TYPES } from './constants'
import { userAuthActionType } from '../types/userAuthTypes'

export const userLogin = (id: String): userAuthActionType => ({
  type: ACTION_TYPES.LOGIN,
  id
})

export const userLogout = (id: String): userAuthActionType => ({
  type: ACTION_TYPES.LOGOUT,
  id
})
