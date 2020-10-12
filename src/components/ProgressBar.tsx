import React from 'react'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap'

export interface ProgressBarProps {
  obtainedVotes: number,
  totalVotes: number
}

const ProgressBar: React.FC<ProgressBarProps> = (props: any) => {
  const { obtainedVotes, totalVotes } = props
  const progressWidth = Math.round(obtainedVotes / totalVotes * 100)
  return (
    <>
      <div className="progress mb-3" style={{height: '35px'}}>
        <div className="progress-bar bg-success pt-2" 
          role="progressbar" 
          style={{width: progressWidth + '%'}} 
          aria-valuenow={progressWidth} 
          aria-valuemin={0} aria-valuemax={100}>
          <h5>{progressWidth + '%'}</h5>
        </div>
      </div>
      <h5>{obtainedVotes + ' out of ' + totalVotes + ' votes'}</h5>
    </>
  )
}

export default ProgressBar