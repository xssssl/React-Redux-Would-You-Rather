import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '../utils/test-utils'
import ConnectedNewPoll from './NewPoll'
import RootState from '../types/RootState'
import { rootReducer } from '../store'

describe('component ConnectedNewPoll', () => {
  it('should render correctly', () => {
    const initialState: RootState = {
      userAuth: {
        isAuthenticated: true,
        id: 'michale',
        token: 'wux4nwsgzpg6jxuc5vcdp'
      },
      users: {
        isLoading: false,
        timestamp: 1597129299000,
        data: {}
      },
      questions: {
        isLoading: false,
        timestamp: 1597129299000,
        data: {}
      }
    }
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk))
    store.dispatch = jest.fn()

    render(
      <Router>
        <ConnectedNewPoll />
      </Router>,
      { initialState }
    )
    const optionOneInput = screen.getByLabelText(/Option One/i)
    const optionTwoInput = screen.getByLabelText(/Option Two/i)

    expect(optionOneInput).toBeTruthy()
    expect(optionTwoInput).toBeTruthy()
  })

  it('should not dispatch any action when the input is invalid', () => {
    const initialState: RootState = {
      userAuth: {
        isAuthenticated: true,
        id: 'michale',
        token: 'wux4nwsgzpg6jxuc5vcdp'
      },
      users: {
        isLoading: false,
        timestamp: 1597129299000,
        data: {}
      },
      questions: {
        isLoading: false,
        timestamp: 1597129299000,
        data: {}
      }
    }
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk))
    store.dispatch = jest.fn()

    render(
      <Router>
        <ConnectedNewPoll />
      </Router>,
      { initialState, store }
    )
    const optionOneInput = screen.getByLabelText(/Option One/i)
    const optionTwoInput = screen.getByLabelText(/Option Two/i)
    const createBtn = screen.getByTestId('createNewPollBtn')

    fireEvent.change(optionOneInput,
      { target: { value: 'this is option one' } }
    )
    fireEvent.change(optionTwoInput,
      { target: { value: 'abcd' } }
    )
    fireEvent.click(createBtn)
    expect(store.dispatch).toBeCalledTimes(0)

    var overMaxLengthStr = 'a'
    for(let i=0; i < 8; i++) {
      overMaxLengthStr += Math.random().toString(36).substr(3, 8)
    }
    fireEvent.change(optionTwoInput,
      { target: { value: overMaxLengthStr } }
    )
    fireEvent.click(createBtn)
    expect(store.dispatch).toHaveBeenCalledTimes(0)
  })

  it('should not dispatch any action when the input is invalid', () => {
    const initialState: RootState = {
      userAuth: {
        isAuthenticated: true,
        id: 'michale',
        token: 'wux4nwsgzpg6jxuc5vcdp'
      },
      users: {
        isLoading: false,
        timestamp: 1597129299000,
        data: {}
      },
      questions: {
        isLoading: false,
        timestamp: 1597129299000,
        data: {}
      }
    }
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk))
    store.dispatch = jest.fn()

    render(
      <Router>
        <ConnectedNewPoll />
      </Router>,
      { initialState, store }
    )
    const optionOneInput = screen.getByLabelText(/Option One/i)
    const optionTwoInput = screen.getByLabelText(/Option Two/i)
    const createBtn = screen.getByTestId('createNewPollBtn')

    fireEvent.change(optionOneInput,
      { target: { value: 'this is option one' } }
    )
    fireEvent.change(optionTwoInput,
      { target: { value: 'this is option two' } }
    )
    fireEvent.click(createBtn)
    expect(store.dispatch).toHaveBeenCalledTimes(1)
  })
})