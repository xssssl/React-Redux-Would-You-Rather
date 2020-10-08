import configureMockStore from 'redux-mock-store'
import { ThunkDispatch } from 'redux-thunk'
import thunk from 'redux-thunk'
import { handleFetchUsersData } from './users'
import { handleFetchQuestionsData } from './questions'
import { userLogin, handleUserLogin } from './userAuth'
import { handleAddAnswer, handleAddQuestion, UserQuestionCombinedState } from './shared'
import { USERS_ACTION_TYPES, QUESTIONS_ACTION_TYPES } from './constants'
import { AddAnswerAction, AddQuestionAction as AddQuestionToUserAction, UserAction, UserState } from '../types/UsersTypes'
import { AddVoteAction, AddQuestionAction, QuestionAction, QuestionState } from '../types/QuestionsTypes'
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

describe('async both users and questions shared actions', () => {
  it('creates both ADD_ANSWER and ADD_VOTE actions', () => {
    const middlewares = [thunk]
    const mockStore = configureMockStore<UserQuestionCombinedState, 
      ThunkDispatch<UserQuestionCombinedState, unknown, UserAction | QuestionAction>>(middlewares)
      
    const initState: UserQuestionCombinedState = {
      users: {
        isLoading: false,
        timestamp: 1598956230000,
        data: {
          johndoe: {
            id: 'johndoe',
            name: 'John Doe',
            avatarURL: '/assets/avatar1.png',
            answers: {
              "xj352vofupe1dqz9emx13r": 'optionOne',
              "vthrdm985a262al8qx3do": 'optionTwo',
              "6ni6ok3ym7mf1p33lnez": 'optionTwo'
            },
            questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
          }
        }
      },
      questions: {
        isLoading: false,
        timestamp: 1598956230000,
        data: {
          "8xf0y6ziyjabvozdd253nd": {
            id: '8xf0y6ziyjabvozdd253nd',
            author: 'sarahedo',
            timestamp: 1599732000000,
            optionOne: {
              votes: ['sarahedo'],
              text: 'have horrible short term memory',
            },
            optionTwo: {
              votes: [],
              text: 'have horrible long term memory'
            }
          }
        }
      }
    }
    const store = mockStore(initState)
    const addAnswerAction: AddAnswerAction = {
      type: USERS_ACTION_TYPES.ADD_ANSWER,
      authedUser: 'johndoe',
      qid: '8xf0y6ziyjabvozdd253nd',
      answer: 'optionTwo'
    }
    const addVoteAction: AddVoteAction = {
      type: QUESTIONS_ACTION_TYPES.ADD_VOTE,
      authedUser: 'johndoe',
      qid: '8xf0y6ziyjabvozdd253nd',
      answer: 'optionTwo'
    }
    const expectedActionsWhenSuccess = [addAnswerAction, addVoteAction]
      
    // should return the promise
    return store.dispatch(handleAddAnswer({
      authedUser: 'johndoe',
      qid: '8xf0y6ziyjabvozdd253nd',
      answer: 'optionTwo'
     })).then(() => {
      expect(store.getActions()).toEqual(expectedActionsWhenSuccess)
    })
  })

  it('creates ADD_QUESTION action in both users and questions', () => {
    const middlewares = [thunk]
    const mockStore = configureMockStore<UserQuestionCombinedState, 
      ThunkDispatch<UserQuestionCombinedState, unknown, UserAction | QuestionAction>>(middlewares)
      
    const initState: UserQuestionCombinedState = {
      users: {
        isLoading: false,
        timestamp: 1598956230000,
        data: {
          johndoe: {
            id: 'johndoe',
            name: 'John Doe',
            avatarURL: '/assets/avatar1.png',
            answers: {
              "xj352vofupe1dqz9emx13r": 'optionOne',
              "vthrdm985a262al8qx3do": 'optionTwo',
              "6ni6ok3ym7mf1p33lnez": 'optionTwo'
            },
            questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
          }
        }
      },
      questions: {
        isLoading: false,
        timestamp: 1598956230000,
        data: {}
      }
    }
    const store = mockStore(initState)
    
    // should return the promise
    return store.dispatch(handleAddQuestion({
      optionOneText: 'have horrible short term memory',
      optionTwoText: 'have horrible long term memory',
      author: 'johndoe'
    })).then(() => {
      const storeActions = store.getActions()
      const qid = storeActions[0].qid
      const timestamp = storeActions[1].question.timestamp

      const addQuestionToUserAction: AddQuestionToUserAction = {
        type: USERS_ACTION_TYPES.ADD_QUESTION,
        authedUser: 'johndoe',
        qid: qid
      }
      const addQuestionAction: AddQuestionAction = {
        type: QUESTIONS_ACTION_TYPES.ADD_QUESTION,
        question: {
          id: qid,
          author: 'johndoe',
          timestamp: timestamp,
          optionOne: {
            votes: [],
            text: 'have horrible short term memory',
          },
          optionTwo: {
            votes: [],
            text: 'have horrible long term memory'
          }
        }
      }
      const expectedActionsWhenSuccess = [addQuestionToUserAction, addQuestionAction]
      expect(store.getActions()).toEqual(expectedActionsWhenSuccess)
    })
  })
})