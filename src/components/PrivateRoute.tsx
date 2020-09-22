import React, { useRef, ReactNode, FunctionComponent, MutableRefObject, useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { RootState } from '../types/RootState'

interface PrivateRouteProps {
  isAuthenticated: boolean,
  defaultHomePath: string,
  authPath: string,
  children?: ReactNode
}

const PrivateRoute: FunctionComponent<PrivateRouteProps> = (props) => {
  const { 
    isAuthenticated, 
    defaultHomePath, 
    authPath, 
    children, 
    ...rest 
  } = props

  useEffect(() => {
    isAuthenticated && console.log('PrivateRoute useEffect')
  }, [isAuthenticated])

  const location = useLocation()
  const fromPath: MutableRefObject<string> = useRef(location.pathname)

  return (
    <Route {...rest}>
      {isAuthenticated 
        ? <>
            <Redirect to={fromPath.current === authPath ? defaultHomePath : fromPath.current} />  
            {children}
          </>
        : <Redirect to={authPath}
          />}
    </Route>
  )
}

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: state.userAuth.isAuthenticated
})

// const mapDispatchToProps = {  }

const ConnectedPrivateRoute = connect(mapStateToProps)(PrivateRoute)

export default ConnectedPrivateRoute