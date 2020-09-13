import React from 'react'
import Poll from './Poll'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

const PollList: React.FC = (props: any) => {
  return (
    <>
      <Poll />
      <Poll />
      <Poll />
    </>
  )
}

export default PollList