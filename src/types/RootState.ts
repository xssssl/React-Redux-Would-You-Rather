import { UserAuthState } from './UserAuthTypes'
import { UserState } from './UsersTypes'
import { QuestionState } from './QuestionsTypes'

type RootState = {
  userAuth: UserAuthState,
  users: UserState,
  questions: QuestionState
}

export default RootState