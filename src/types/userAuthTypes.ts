export interface userAuthActionType {
  type: String,
  id: String
}

export interface userAuthStateType {
  isAuth: boolean,
  id?: String
}