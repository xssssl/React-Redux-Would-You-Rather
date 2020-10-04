interface Answers {
  [key: string]: string
}

export interface User {
  id: string,
  name: string,
  avatarURL: string,
  answers: Answers,
  questions: Array<string>
}

export interface Users {
  [key: string]: User
}

interface Option {
  votes: Array<string>,
  text: string
}

export interface Question {
  id: string,
  author: string,
  timestamp: number,
  optionOne: Option,
  optionTwo: Option,
}

export interface Questions {
  [qid: string]: Question
}

export interface CreateQuestionRequest {
  optionOneText: string,
  optionTwoText: string,
  author: string
}

export interface CreateAnswerRequest {
  authedUser: string,
  qid: string,
  answer: 'optionOne' | 'optionTwo'
}

export interface UserAuthenticationRequest {
  id: string,
  password: string
}