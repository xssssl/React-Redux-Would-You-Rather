import { UserAuthState } from './UserAuthTypes'
import { UsersState } from './UsersTypes'

export type RootState = {
  userAuth: UserAuthState,
  users: UsersState
}