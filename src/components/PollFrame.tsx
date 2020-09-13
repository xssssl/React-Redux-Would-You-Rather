import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import avatar from '../assets/avatar2.png'

const PollFrame: React.FC = (props: any) => {
  return (
    <div className="card mt-3 mb-3">
      <div className="card-header">
        <h5>You <span className="h6">says</span></h5>
      </div>
      <div className="row no-gutters align-items-center">
        <div className="col-md-4 border-right">
          <img src={avatar} className="mx-auto d-block img-avatar card-img" alt="avatar" />
        </div>
        <div className="col-md-8">
          <div className="card-body text-center">
            {props.children}
          </div>
        </div>
      </div>
      <div className="card-footer text-center text-muted">
        Asked 2 days ago
      </div>
    </div>
  )
}

export default PollFrame