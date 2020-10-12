import { USERAUTH_ACTION_TYPES } from '../actions/constants'

export interface UserLoginActionParams {
  id: string,
  token: string
}

export type UserLoginAction =  UserLoginActionParams & {
  type: typeof USERAUTH_ACTION_TYPES.LOGIN
}

export interface UserLogoutAction {
  type: typeof USERAUTH_ACTION_TYPES.LOGIN
}

export type UserAuthAction = UserLoginAction | UserLogoutAction

export interface UserAuthState {
  isAuthenticated: boolean,
  id: string,
  token: string
}