import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './actions'
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    // fetchMock.getOnce('http://example.com/todos', {
    //   body: { todos: ['do something'] },
    //   headers: { 'content-type': 'application/json' }
    // })

    const expectedActions = [
      { type: 'FETCH_TODOS_REQUEST' },
      { type: 'FETCH_TODOS_SUCCESS', body: { todos: ['do something'] } }
    ]
    const store = mockStore({ todos: [] })

    return store.dispatch<any>(actions.fetchTodos()).then(() => {
      console.log('Mock Store Actions', store.getActions())
      console.log('Mock Store State: ', store.getState())
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})