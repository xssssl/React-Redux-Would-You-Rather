import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
// import { render, screen } from '@testing-library/react'
import { render, screen, fireEvent } from '../utils/test-utils'
import ConnectedNav from './Nav'
import RootState from '../types/RootState'
import { rootReducer } from '../store'

describe('compoent ConnectedNav', () => {
  it('should render correctly', () => {
    const initialState: RootState = {
      userAuth: {
        id: 'daniel',
        isAuthenticated: true,
        token:'8nflu12bd62r3ocyxi2hw'
      },
      users: {
        isLoading: false,
        timestamp: 1599132615000,
        data: {
          daniel: {
            id: 'daniel',
            name: 'Daniel Andrew',
            avatarURL: '/assets/avatar1.png',
            answers: {
              "ujnbb303o0bp70d271hdro": 'optionOne',
              "vuyiukktowkysm1wqyhw5": 'optionTwo',
              "g0rl4v8nd9samb69ats69": 'optionTwo',
              "jcv7i4toq35y7oy5svyc3": 'optionOne',
              "s15kpcslmnjd672bfktpn5": 'optionOne'
            },
            questions: ['c4rlabls6hki97folgyb1i', 'g0rl4v8nd9samb69ats69']
          }
        }
      },
      questions: {
        isLoading: false,
        timestamp: 1599132615000,
        data: {}
      }
    }

    render(
    <Router>
      <ConnectedNav />
    </Router>,
    { initialState })
    const home = screen.getByText(/home/i)
    const newPoll = screen.getByText(/New Poll/i)
    const leaderboard = screen.getByText(/Leaderboard/i)
    const username = screen.getByText(/Daniel Andrew/i)

    expect(home).toBeTruthy()
    expect(newPoll).toBeTruthy()
    expect(leaderboard).toBeTruthy()
    expect(username).toBeTruthy()
  })

  it('should logout when click the logout button', () => {
    const initialState: RootState = {
      userAuth: {
        id: 'daniel',
        isAuthenticated: true,
        token:'8nflu12bd62r3ocyxi2hw'
      },
      users: {
        isLoading: false,
        timestamp: 1599132615000,
        data: {
          daniel: {
            id: 'daniel',
            name: 'Daniel Andrew',
            avatarURL: '/assets/avatar1.png',
            answers: {
              "ujnbb303o0bp70d271hdro": 'optionOne',
              "vuyiukktowkysm1wqyhw5": 'optionTwo',
              "g0rl4v8nd9samb69ats69": 'optionTwo',
              "jcv7i4toq35y7oy5svyc3": 'optionOne',
              "s15kpcslmnjd672bfktpn5": 'optionOne'
            },
            questions: ['c4rlabls6hki97folgyb1i', 'g0rl4v8nd9samb69ats69']
          }
        }
      },
      questions: {
        isLoading: false,
        timestamp: 1599132615000,
        data: {}
      }
    }
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk))
    store.dispatch = jest.fn()

    render(
    <Router>
      <ConnectedNav />
    </Router>,
    { initialState, store })

    const logoutBtn = screen.getByText(/logout/i)
    fireEvent.click(logoutBtn)
    expect(store.dispatch).toHaveBeenCalledTimes(1)

  })
})