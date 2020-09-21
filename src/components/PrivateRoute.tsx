import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { RootState } from '../types/RootState'

const PrivateRoute = (props: any) => {
  const { isAuthenticated, redirectPath, children, ...rest } = props
  useEffect(() => {
    console.log(isAuthenticated)
    console.log(redirectPath)
    console.log(children)
  }, [isAuthenticated])

  return (
    // <Route
    //   {...rest}
    //   render={() => (
    //     <Redirect
    //       to={redirectPath}
    //     />
    //   )
    //     // isAuthenticated ? (
    //     //   children
    //     // ) : (
    //     //   <Redirect
    //     //     to={{
    //     //       pathname: redirectPath,
    //     //       state: { from: location }
    //     //     }}
    //     //   />
    //     // )
    //   }
    // />
    <Route {...rest}>
      {isAuthenticated 
        ? <>
            <Redirect to="/" />  
            {children}
          </>
        : <Redirect to={redirectPath} />}
    </Route>
  )
}

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: state.userAuth.isAuthenticated
})

const ConnectedPrivateRoute = connect(mapStateToProps)(PrivateRoute)

export default ConnectedPrivateRoute