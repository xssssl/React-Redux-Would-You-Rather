interface ActionType_Constants {
  [key: string]: string
}

export const USERAUTH_ACTION_TYPES: ActionType_Constants = ({
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
})

export const USERS_ACTION_TYPES: ActionType_Constants = ({
  FETCH_USERS_DATA: 'FETCH_USERS_DATA',
  ADD_ANSWER: 'ADD_ANSWER',
  ADD_QUESTION: 'ADD_QUESTION'
})

export const QUESTIONS_ACTION_TYPES: ActionType_Constants = ({
  FETCH_QUESTIONS_DATA: 'FETCH_QUESTIONS_DATA',
  ADD_VOTE: 'ADD_VOTE',
  ADD_QUESTION: 'ADD_QUESTION'
})