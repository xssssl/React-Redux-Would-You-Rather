import 'cross-fetch/polyfill'

function fetchTodosRequest() {
  return {
    type: 'FETCH_TODOS_REQUEST'
  }
}

function fetchTodosSuccess(body: any) {
  return {
    type: 'FETCH_TODOS_SUCCESS',
    body
  }
}

function fetchTodosFailure(ex: any) {
  return {
    type: 'FETCH_TODOS_FAILURE',
    ex
  }
}

// export function fetchTodos() {
//   return (dispatch: any) => {
//     dispatch(fetchTodosRequest())
//     return fetch('http://example.com/todos')
//       .then(res => res.json())
//       .then(body => dispatch(fetchTodosSuccess(body)))
//       .catch(ex => dispatch(fetchTodosFailure(ex)))
//   }
// }

export function fetchTodos() {
  return (dispatch: any) => {
    dispatch(fetchTodosRequest())
    return new Promise((res,rej) => {
      setTimeout(()=> res({ todos: ['do something'] }), 500)
    }).then(body => dispatch(fetchTodosSuccess(body)))
      .catch(ex => dispatch(fetchTodosFailure(ex)))
  }
}