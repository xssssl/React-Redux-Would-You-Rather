import React, { useState, useEffect, BaseSyntheticEvent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleFetchUsersData } from '../actions/users'
import { handleUserLogin } from '../actions/userAuth'
import Select, { SelectOptions } from './Select'
import { UserState } from '../types/UsersTypes'
import RootState from '../types/RootState'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import MainImg from '../assets/main.png'

export const Login: React.FC = (props: any) => {
  const { users }: {users: UserState} = props
  const { handleFetchUsersData, handleUserLogin } = props

  // optionValue should be '' if you want to use custom-select validation
  const initSelectOptions: SelectOptions = [{optionValue: '', optionText: 'Choose...'}]
  const [selectOptions, setSelectOptions] = useState(initSelectOptions)
  const [selectedOption, setSelectedOption] = useState(initSelectOptions[0].optionValue)

  const [password, setPassword] = useState('')
  const [isLoginAttempt, setIsLoginAttemp] = useState(false)
  const [isValidUsername, setIsValidUsername] = useState(false)
  const [isValidPassword, setIsValidPassword] = useState(false)

  useEffect(() => {
    console.log('Fetching initial user data ...')
    handleFetchUsersData()
  }, [])

  useEffect(() => {
    const usernameList = Object.keys(users.data)
    let currentOptions: SelectOptions = usernameList.map(item => {
      const capitalizedItem = item.replace(/^\S/, s => s.toUpperCase())
      return {optionValue: item, optionText: capitalizedItem}
    })
    setSelectOptions([...initSelectOptions, ...currentOptions])
  }, [users.data])

  const handleSelectOnChange = (e: BaseSyntheticEvent): void => {
    const selectedUserId = e.currentTarget.value
    setSelectedOption(selectedUserId)
    setIsValidUsername(usernameValidation(selectedUserId))
  }

  const handlePasswordOnChange = (e: BaseSyntheticEvent): void => {
    const passwordInput = e.target.value
    setPassword(passwordInput)
    setIsValidPassword(passwordValidation(passwordInput))
  }

  const handleOnClick = (e: BaseSyntheticEvent): void => {
    e.preventDefault()
    setIsLoginAttemp(true)
    isValidUsername && isValidPassword && handleUserLogin({id: selectedOption, password})
  }

  const usernameValidation = (username: string): boolean => {
    return (username === initSelectOptions[0].optionValue) ? false : true
  }

  const passwordValidation = (password: string): boolean => {
    return (password === '') ? false : true
  }

  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-sm-4 offset-sm-4">
          <div className="card">
            <img src={MainImg} className="card-img-top" alt="would you rather question"></img>
            <div className="card-body">
              <form className={isLoginAttempt ? "was-validated" : ""} > 
                <div className="form-group">
                  <label htmlFor="loginUsername">Username</label>
                  <Select 
                    id="loginUsername" 
                    className="custom-select"
                    defaultValue={initSelectOptions[0].optionValue}
                    options={selectOptions}
                    onChange={(e: BaseSyntheticEvent) => handleSelectOnChange(e)}
                    required
                  />
                  <div className="invalid-feedback">
                    Please choose a user.
                  </div>
                  <small className="form-text text-muted">
                    This is a mock authentication UI just for demonstration. Choose one of these users from the dropdown.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="loginPassword">Password</label>
                  <input 
                    type="password" 
                    // className={"form-control" + (isValidPassword ? "" : " is-invalid")}
                    className="form-control"
                    id="loginPassword" 
                    placeholder="password" 
                    onChange={(e: BaseSyntheticEvent) => handlePasswordOnChange(e)}
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter any keys in the textarea.
                  </div>
                  <small className="form-text text-muted">
                    Feel free to enter anything. It is fine. Or you could leave it empty.
                  </small>
                </div>
                <div className="form-group mt-5">
                  <Link to="/">
                    <button 
                      type="submit" 
                      className="btn btn-primary btn-block" 
                      id='loginBtn'
                      data-testid='loginBtn'
                      onClick={(e: BaseSyntheticEvent) => handleOnClick(e)}>Login</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  users: state.users
})

const  mapDispatchToProps = { handleFetchUsersData, handleUserLogin }

const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login)

export default ConnectedLogin