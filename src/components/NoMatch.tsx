import React from 'react'
import '../styles/NoMatch.scss'

const NoMatch: React.FC = (props: any) => {
  return (
    <div className="nomatch-container">
    {/* <h2>Page not found</h2> */}
      <div className="nomatch-text">
        <p>Error 404</p>
        <p className="nomatch-lastline">Page not found...</p>
      </div>
    </div>
  )
}

export default NoMatch