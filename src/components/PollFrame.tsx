import React, { PropsWithChildren } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
// import avatar from '../assets/avatar2.png'
// import avatar from '/assets/avatar1.png'

export interface PollFrameComponentProps {
  displayedAuthor: string,
  avatarURL: string,
  askedTime: string
}

type PollFrameProps = PropsWithChildren<PollFrameComponentProps>

const PollFrame: React.FC<PollFrameProps> = (props: PollFrameProps) => {
  const { displayedAuthor, avatarURL, askedTime } = props
  return (
    <div className="card mt-3 mb-3">
      <div className="card-header">
        <h5 data-testid='displayed-author'>{displayedAuthor + ' '}<span className="h6">says</span></h5>
      </div>
      <div className="row no-gutters align-items-center">
        <div className="col-md-4 border-right">
          <img src={avatarURL} className="mx-auto d-block img-avatar card-img" alt="avatar" />
        </div>
        <div className="col-md-8">
          <div className="card-body text-center">
            {props.children}
          </div>
        </div>
      </div>
      <div className="card-footer text-center text-muted">
        {'Asked ' + askedTime + ' ago'}
      </div>
    </div>
  )
}

export default PollFrame