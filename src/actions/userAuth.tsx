import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { userAuthentication } from '../services/apis'
import { UserAuthenticationRequest } from '../services/types'
import { USERAUTH_ACTION_TYPES } from './constants'
import { UserLoginActionParams, UserAuthAction, UserAuthState } from '../types/UserAuthTypes'

export const userLogin = ({id, token}: UserLoginActionParams): UserAuthAction => ({
  type: USERAUTH_ACTION_TYPES.LOGIN,
  id,
  token
})

export const userLogout = (): UserAuthAction => ({
  type: USERAUTH_ACTION_TYPES.LOGOUT,
})

export const handleUserLogin = ({ id, password }: UserAuthenticationRequest):
  ThunkAction<Promise<void>, UserAuthState, unknown, UserAuthAction> => {
    console.log('From handleUserLogin: loginBtn is pressed')
    return (dispatch: ThunkDispatch<UserAuthState, unknown, UserAuthAction>): Promise<void> => {
      return userAuthentication({ id, password }).then((token) => {
        token && dispatch(userLogin({ id, token }))
      }).catch(error => console.log('Error: ', error))
    }
}
