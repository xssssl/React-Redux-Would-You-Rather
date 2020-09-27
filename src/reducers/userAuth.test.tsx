import userAuth from './userAuth'
import { userLogin, userLogout } from '../actions/userAuth'
import { UserAuthState } from '../types/UserAuthTypes'

describe('userAuth reducer', () => {
  const initState: UserAuthState = {
    isAuthenticated: false,
    id: '',
    token: ''
  }

  const stateAfterLogin: UserAuthState = {
    isAuthenticated: true,
    id: 'Michale',
    token: 'us2ux3fr8ei97uziwn61'
  }

  const stateAfterLogout: UserAuthState = {
    isAuthenticated: false,
    id: '',
    token: ''
  }

  it('should login user', () => {
    expect(userAuth(initState, userLogin({
      id: 'Michale',
      token: 'us2ux3fr8ei97uziwn61'
    }))).toEqual(stateAfterLogin)
  })

  it('should logout user', () => {
    expect(userAuth(stateAfterLogin, userLogout())).toEqual(stateAfterLogout)
  })

})
