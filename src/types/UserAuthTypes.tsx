export interface UserAuthAction {
  type: string,
  id: string
}

export interface UserAuthState {
  isAuthenticated: boolean,
  id: string
}