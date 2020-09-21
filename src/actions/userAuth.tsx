import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { userAuthentication } from '../services/apis'
import { UserAuthenticationRequest } from '../services/types'
import { USERAUTH_ACTION_TYPES } from './constants'
import { UserAuthAction, UserAuthState } from '../types/UserAuthTypes'

export const userLogin = (id: string): UserAuthAction => ({
  type: USERAUTH_ACTION_TYPES.LOGIN,
  id
})

export const userLogout = (id: string): UserAuthAction => ({
  type: USERAUTH_ACTION_TYPES.LOGOUT,
  id
})

export const handleUserLogin = ({ id, password }: UserAuthenticationRequest):
  ThunkAction<Promise<void>, UserAuthState, unknown, UserAuthAction> => {
    return (dispatch: ThunkDispatch<UserAuthState, unknown, UserAuthAction>): Promise<void> => {
      return userAuthentication({ id, password }).then((AuthenticatedUserId) => {
        AuthenticatedUserId && dispatch(userLogin(id))
      }).catch(error => console.log(error))
    }
}
