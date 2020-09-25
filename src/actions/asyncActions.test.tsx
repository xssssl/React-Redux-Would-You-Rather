import configureMockStore from 'redux-mock-store'
import { ThunkDispatch } from 'redux-thunk'
import thunk from 'redux-thunk'
import { handleFetchUsersData } from './users'
import { USERS_ACTION_TYPES } from './constants'
import { UserAction, UserState } from '../types/UsersTypes'

describe('async users actions', () => {
  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    const middlewares = [thunk]
    const mockStore = configureMockStore<UserState, ThunkDispatch<UserState, unknown, UserAction>>(middlewares)

    const fetchUsersDataAction: UserAction = {
      type: USERS_ACTION_TYPES.FETCH_USERS_DATA
    }
    const receiveUsersDataAction: UserAction = {
      type: USERS_ACTION_TYPES.RECEIVE_USERS_DATA,
      timestamp: 1598959830000,
      data: {
        susan: {
          id: 'susan',
          name: 'Susan Connor',
          avatarURL: 'http://sample.avatar/1.jpg',
          answers: {
            "ujnbb303o0bp70d271hdro": 'optionOne',
            "jcv7i4toq35y7oy5svyc3": 'optionOne'
          },
          questions: ['c4rlabls6hki97folgyb1i', 'zkwy82vcj0davbfiqcs9xp']
        }
      }
    }
    const expectedState = {
      isLoading: false,
      timestamp: 1598959830000,
      data: {
        susan: {
          id: 'susan',
          name: 'Susan Connor',
          avatarURL: 'http://sample.avatar/1.jpg',
          answers: {
            "ujnbb303o0bp70d271hdro": 'optionOne',
            "jcv7i4toq35y7oy5svyc3": 'optionOne'
          },
          questions: ['c4rlabls6hki97folgyb1i', 'zkwy82vcj0davbfiqcs9xp']
        }
      }
    }

    const expectedActions = [fetchUsersDataAction, receiveUsersDataAction]
    const store = mockStore({ isLoading: false, data: {} })

    store.dispatch(handleFetchUsersData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
      expect(store.getState()).toEqual(expectedState)
    })
  })
})