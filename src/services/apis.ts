import { 
  _getUsers,
  _getQuestions, 
  _saveQuestion, 
  _saveQuestionAnswer,
  _userAuthentication } from '../utils/_DATA'
import { 
  Users,
  Question, 
  Questions, 
  CreateQuestionRequest, 
  CreateAnswerRequest,
  UserAuthenticationRequest } from '../services/types'

// Mock Application Logic
export const getInitUsers = (): Promise<Users> => {
  return _getUsers()
}

export const getInitQuestions = (): Promise<Questions> => {
  return _getQuestions()
}

export const saveQuestion = (
  question: CreateQuestionRequest): Promise<Question> => {
  return _saveQuestion(question)
}

export const saveAnswer = (
  { authedUser, qid, answer }: CreateAnswerRequest): Promise<void> => {
  return _saveQuestionAnswer({ authedUser, qid, answer })
}

export const userAuthentication = ({ id, password }: UserAuthenticationRequest): Promise<string> => {
  return _userAuthentication({ id, password })
}