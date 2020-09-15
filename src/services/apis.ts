import { 
  _getUsers,
  _getQuestions, 
  _saveQuestion, 
  _saveQuestionAnswer } from '../utils/_DATA'
import { 
  Users,
  Question, 
  Questions, 
  CreateQuestionRequest, 
  CreateAnswerRequest } from '../services/types'

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