import { UserAuthAction } from './UserAuthTypes'
import { UserAction } from './UsersTypes'
import { QuestionAction } from './QuestionsTypes'

type RootActions = | UserAuthAction
                   | UserAction
                   | QuestionAction

export default RootActions