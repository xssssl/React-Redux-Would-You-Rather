import configureMockStore from 'redux-mock-store'
import { ThunkDispatch } from 'redux-thunk'
import thunk from 'redux-thunk'
import { handleFetchUsersData } from './users'
import { handleFetchQuestionsData } from './questions'
import { userLogin, handleUserLogin } from './userAuth'
import { USERS_ACTION_TYPES, QUESTIONS_ACTION_TYPES } from './constants'
import { UserAction, UserState } from '../types/UsersTypes'
import { QuestionAction, QuestionState } from '../types/QuestionsTypes'
import { UserAuthAction, UserAuthState } from '../types/UserAuthTypes'
import { users, questions } from '../utils/_DATA'

describe('async users actions', () => {
  it(`creates FETCH_USERS_DATA_SUCCESS when fetching data has been done`, () => {
    const middlewares = [thunk]
    const mockStore = configureMockStore<
      UserState, ThunkDispatch<UserState, unknown, UserAction>>(middlewares)
      
    const initState: UserState = { isLoading: false, data: {} }
    const store = mockStore(initState)
    const fetchUsersDataAction: UserAction = {
      type: USERS_ACTION_TYPES.FETCH_USERS_DATA
    }
      
    // should return the promise
    return store.dispatch(handleFetchUsersData()).then(() => {
      const mockActions = store.getActions()
      const timestamp = mockActions[1].timestamp
      const fetchUsersDataSuccessAction: UserAction = {
        type: USERS_ACTION_TYPES.FETCH_USERS_DATA_SUCCESS,
        timestamp,
        data: {
          ...users
        }
      }
      const expectedActionsWhenSuccess = [fetchUsersDataAction, fetchUsersDataSuccessAction]
      expect(store.getActions()).toEqual(expectedActionsWhenSuccess)
    })
  })

  // it(`creates FETCH_USERS_DATA_FAIL when fetching data failed`, () => {
  //   const middlewares = [thunk]
  //   const mockStore = configureMockStore<
  //     UserState, ThunkDispatch<UserState, unknown, UserAction>>(middlewares)
      
  //   const initState: UserState = { isLoading: false, data: {} }
  //   const store = mockStore(initState)
  //   const fetchUsersDataAction: UserAction = {
  //     type: USERS_ACTION_TYPES.FETCH_USERS_DATA
  //   }
    
  //   // should return the promise
  //   return store.dispatch(handleFetchUsersData()).then(() => {
  //     const fetchUsersDataFailAction: UserAction = {
  //       type: USERS_ACTION_TYPES.FETCH_USERS_DATA_FAIL
  //     }
  //     const expectedActionsWhenFail = [fetchUsersDataAction, fetchUsersDataFailAction]
  //     expect(store.getActions()).toEqual(expectedActionsWhenFail)
  //   })
  // })
})

describe('async userAuth actions', () => {
  it('should login user when async authentication has been done', () => {
    const middlewares = [thunk]
    const mockStore = configureMockStore<
      UserAuthState, ThunkDispatch<UserAuthState, unknown, UserAuthAction>>(middlewares)

    const username = Object.keys(users)[0]
    const initState: UserAuthState = {
      isAuthenticated: false,
      id: '',
      token: ''
    }
    const store = mockStore(initState)

    return store.dispatch(handleUserLogin({ id: username, password: 'qwert'})).then(() => {
      const actions = store.getActions()
      const token = actions[0].token
      const userLoginAction: UserAuthAction = userLogin({id: username, token})
      const expectedActions = [userLoginAction]
      
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should reject the login attempt when async authentication has been done', () => {
    const middlewares = [thunk]
    const mockStore = configureMockStore<
      UserAuthState, ThunkDispatch<UserAuthState, unknown, UserAuthAction>>(middlewares)

    const username = 'fakeuser'
    const initState: UserAuthState = {
      isAuthenticated: false,
      id: '',
      token: ''
    }
    const expectedActions: any[] = []

    const store = mockStore(initState)
    return store.dispatch(handleUserLogin({ id: username, password: 'qwert'})).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

describe('async questions actions', () => {
  it(`creates FETCH_QUESTIONS_DATA_SUCCESS when fetching data has been done`, () => {
    const middlewares = [thunk]
    const mockStore = configureMockStore<
      QuestionState, ThunkDispatch<QuestionState, unknown, QuestionAction>>(middlewares)
      
    const initState: QuestionState = { isLoading: false, data: {} }
    const store = mockStore(initState)
    const fetchQuestionsDataAction: QuestionAction = {
      type: QUESTIONS_ACTION_TYPES.FETCH_QUESTIONS_DATA
    }
      
    // should return the promise
    return store.dispatch(handleFetchQuestionsData()).then(() => {
      const mockActions = store.getActions()
      const timestamp = mockActions[1].timestamp
      const fetchQuestionsDataSuccessAction: QuestionAction = {
        type: QUESTIONS_ACTION_TYPES.FETCH_QUESTIONS_DATA_SUCCESS,
        timestamp,
        data: {
          ...questions
        }
      }
      const expectedActionsWhenSuccess = [fetchQuestionsDataAction, fetchQuestionsDataSuccessAction]
      expect(mockActions).toEqual(expectedActionsWhenSuccess)
    })
  })
})