import React from 'react'
import ProgressBar from './ProgressBar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'

const OptionResult: React.FC = (props: any) => {
  return (
    <>
      <div className="card border-danger text-danger">
        <div className="card-header">
          <h3><FontAwesomeIcon icon={faCheckCircle} /> Your Vote</h3>
        </div>
        <div className="card-body">
          <h4 className="mb-4">Option Content Option Content</h4>
          <ProgressBar obtainedVotes={3} totalVotes={5} />
        </div>
      </div>
      <br />
      <div className="card">
        <div className="card-body">
          <h4 className="mb-4">Option Content Option Content</h4>
          <ProgressBar obtainedVotes={2} totalVotes={5} />
        </div>
      </div>
      <br />
    </>
  )
}

export default OptionResult