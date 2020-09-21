import { createStore, Store, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userAuth from '../reducers/userAuth'
import users from '../reducers/users'
// import { UserAction, UsersState } from '../types/UsersTypes'
// import { UserAuthAction, UserAuthState } from '../types/UserAuthTypes'


const rootReducer = combineReducers({
  users, 
  userAuth
})

const store: Store = createStore(rootReducer, applyMiddleware(thunk))
export default store 
