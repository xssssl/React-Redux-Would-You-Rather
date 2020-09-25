import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { USERS_ACTION_TYPES } from './constants'
import { CreateAnswerRequest } from '../services/types'
import { getInitUsers } from '../services/apis'
import { 
  UserAction, 
  UserState, 
  AddQuestionActionParams, 
  FetchDataSuccessActionParams 
} from '../types/UsersTypes'

export const addAnswerToUser = ({ authedUser, qid, answer }: CreateAnswerRequest
    ): UserAction => ({
  type: USERS_ACTION_TYPES.ADD_ANSWER,
  authedUser,
  qid,
  answer
})

export const addQuestionToUser = ({
  authedUser, qid }: AddQuestionActionParams): UserAction => ({
  type: USERS_ACTION_TYPES.ADD_QUESTION,
  authedUser,
  qid
})

export const fetchUsersData = (): UserAction => ({
  type: USERS_ACTION_TYPES.FETCH_USERS_DATA
})

export const fetchUsersDataSuccess = ({
    data, timestamp }: FetchDataSuccessActionParams): UserAction => ({
  type: USERS_ACTION_TYPES.FETCH_USERS_DATA_SUCCESS,
  data,
  timestamp
})

export const fetchUsersDataFail = (): UserAction => ({
  type: USERS_ACTION_TYPES.FETCH_USERS_DATA_FAIL
})

export const handleFetchUsersData = ():
  ThunkAction<Promise<void>, UserState, unknown, UserAction> => {
    return (dispatch: ThunkDispatch<UserState, unknown, UserAction>): Promise<void> => {
      dispatch(fetchUsersData())
      return getInitUsers().then(data => {
        dispatch(fetchUsersDataSuccess({ data, timestamp: Date.now()}))
      }).catch(error => {
        console.log(error)
        dispatch(fetchUsersDataFail())
      })
    }
}