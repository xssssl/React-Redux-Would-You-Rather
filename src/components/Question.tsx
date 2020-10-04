import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlasses, faPoll } from '@fortawesome/free-solid-svg-icons'

export interface QuestionProps {
  isAnswered: boolean,
  questionId: string,
  optionOneText: string,
  optionTwoText: string
}

const Question: React.FC<QuestionProps> = (props: QuestionProps) => {
  const { isAnswered, optionOneText, optionTwoText } = props
  return (
    <>
      <h5 className="card-title">Would you rather</h5>
      <p className="card-text text-left ml-2 mr-5">{optionOneText}</p>
      <img src='/assets/img_vs.png' className="mx-auto img-10 mb-2" alt="vs" />
      <p className="card-text text-right ml-5 mr-2">{optionTwoText}</p>
      {
        isAnswered 
          ? <button className="btn btn-info btn-block"><FontAwesomeIcon icon={faGlasses} />  View Details</button>
          : <button className="btn btn-success btn-block"><FontAwesomeIcon icon={faPoll} />   Answer Now</button>
      }
    </>
  )
}

export default Question