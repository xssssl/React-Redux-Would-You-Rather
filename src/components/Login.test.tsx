import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen, fireEvent } from '../utils/test-utils'
import RootState from '../types/RootState'
import { rootReducer } from '../store'
import ConnectedLogin from './Login'

const initialState: RootState = {
  userAuth: {
    isAuthenticated: true,
    id: 'rick',
    token: 'us2ux3fr8ei97uziwn61'
  },
  users: {
    isLoading: false,
    timestamp: 1598956230000,
    data: {
      tylermcginnis: {
        id: 'tylermcginnis',
        name: 'Tyler McGinnis',
        avatarURL: 'http://sample.avatar/1.jpg',
        answers: {
          "ujnbb303o0bp70d271hdro": 'optionOne',
          "vuyiukktowkysm1wqyhw5": 'optionTwo',
          "c4rlabls6hki97folgyb1i": 'optionTwo',
          "jcv7i4toq35y7oy5svyc3": 'optionOne'
        },
        questions: ['c4rlabls6hki97folgyb1i', 'zkwy82vcj0davbfiqcs9xp']
      },
      johndoe: {
        id: 'johndoe',
        name: 'John Doe',
        avatarURL: 'http://sample.avatar/2.jpg',
        answers: {
          "xgdmjpi5apdm48pqkgjphh": 'optionOne',
          "td74276e5yjztyjvgvwhl": 'optionTwo',
        },
        questions: ['xgdmjpi5apdm48pqkgjphh', 'ujnbb303o0bp70d271hdro']
      }
    }
  },
  questions: {
    isLoading: false,
    timestamp: 1598956230000,
    data: {
      "3g9hevwba0z591sworoyob": {
        id: '3g9hevwba0z591sworoyob',
        author: 'rick',
        timestamp: 1598347824000,
        optionOne: {
          votes: ['rick', 'mark'],
          text: 'have dinner at home',
        },
        optionTwo: {
          votes: ['Paul'],
          text: 'have dinner at resta'
        }
      },
      "g0rl4v8nd9samb69ats69": {
        id: 'g0rl4v8nd9samb69ats69',
        author: 'daniel',
        timestamp: 1598346947000,
        optionOne: {
          votes: [],
          text: 'become a superhero',
        },
        optionTwo: {
          votes: ['daniel', 'johndoe', 'mark'],
          text: 'become a supervillain'
        }
      }
    }
  }
}

describe('component ConnectedLogin', () => {
  it('should render core components correctly', () => {
    render(
      <Router>
        <ConnectedLogin />
      </Router>,
      { initialState }
    )
    const usernameInput = screen.getByLabelText(/Username/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const loginBtn = screen.getByTestId('loginBtn')
    expect(usernameInput).toBeTruthy()
    expect(passwordInput).toBeTruthy()
    expect(loginBtn).toBeTruthy()
  })
  
  it('should not dispatch any action if password is invalid', () => {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk))
    store.dispatch = jest.fn()
    render(
      <Router>
        <ConnectedLogin />
      </Router>,
      { initialState, store }
    )
    const usernameInput = screen.getByLabelText(/username/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const loginBtn = screen.getByTestId('loginBtn')

    fireEvent.change(usernameInput, {
      target: { value: Object.keys(initialState.users.data)[0] }
    })
    fireEvent.change(passwordInput, {
      target: { value: '' }
    })
    fireEvent.click(loginBtn)
    // handleFetchUsersData would consume store.dispatch once
    expect(store.dispatch).toHaveBeenCalledTimes(1)
  })

  it('should not dispatch any action if username is invalid', () => {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk))
    store.dispatch = jest.fn()
    render(
      <Router>
        <ConnectedLogin />
      </Router>,
      { initialState, store }
    )
    const passwordInput = screen.getByLabelText(/password/i)
    const loginBtn = screen.getByTestId('loginBtn')

    fireEvent.change(passwordInput, {
      target: { value: '123' }
    })
    fireEvent.click(loginBtn)
    // handleFetchUsersData would consume store.dispatch once
    expect(store.dispatch).toHaveBeenCalledTimes(1)
  })

  it('should dispatch an action(user login) if both username and pasword are valid', () => {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk))
    store.dispatch = jest.fn()
    render(
      <Router>
        <ConnectedLogin />
      </Router>,
      { initialState, store }
    )
    const usernameInput = screen.getByLabelText(/username/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const loginBtn = screen.getByTestId('loginBtn')
    
    fireEvent.change(usernameInput, {
      target: { value: Object.keys(initialState.users.data)[0] }
    })
    fireEvent.change(passwordInput, {
      target: { value: '123' }
    })
    fireEvent.click(loginBtn)
    // handleFetchUsersData would consume store.dispatch once
    expect(store.dispatch).toHaveBeenCalledTimes(2)
  })

  it('should not dispatch any action if both username and password are invalid', () => {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk))
    store.dispatch = jest.fn()
    render(
      <Router>
        <ConnectedLogin />
      </Router>,
      { initialState, store }
    )
    // const usernameInput = screen.getByLabelText(/username/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const loginBtn = screen.getByTestId('loginBtn')

    // fireEvent.change(usernameInput, {
    //   target: { value: Object.keys(initialState.users.data)[0] }
    // })
    fireEvent.change(passwordInput, {
      target: { value: '' }
    })
    fireEvent.click(loginBtn)
    // handleFetchUsersData would consume store.dispatch once
    expect(store.dispatch).toHaveBeenCalledTimes(1)
  })
})
