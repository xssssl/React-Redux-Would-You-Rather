import React, { useRef, ReactNode, FunctionComponent, MutableRefObject, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { handleFetchQuestionsData } from '../actions/questions'
import RootState from '../types/RootState'

interface PrivateRoutePropsFromParent {
  defaultHomePath: string,
  authPath: string,
  children?: ReactNode
}

type PrivateRouteProps = PrivateRoutePropsFromParent & PrivateRoutePropsFromRedux

const PrivateRoute: FunctionComponent<PrivateRouteProps> = (props) => {
  const { 
    isAuthenticated, 
    defaultHomePath, 
    authPath, 
    children,
    handleFetchQuestionsData, 
    ...rest 
  } = props

  useEffect(() => {
    console.log('Fetching initial question data ...')
    handleFetchQuestionsData()
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

const mapDispatchToProps = { handleFetchQuestionsData }

const connector = connect(mapStateToProps, mapDispatchToProps)

type PrivateRoutePropsFromRedux = ConnectedProps<typeof connector>

const ConnectedPrivateRoute = connector(PrivateRoute)

export default ConnectedPrivateRoute