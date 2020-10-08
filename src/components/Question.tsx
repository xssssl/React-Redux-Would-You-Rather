import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/scss/bootstrap.scss'
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
  const { isAnswered, questionId, optionOneText, optionTwoText } = props
  return (
    <>
      <h4 className="card-title">Would you rather</h4>
      <h5 className="card-text text-left ml-2 mr-5">{optionOneText}</h5>
      <img src='/assets/img_vs.png' className="mx-auto img-7 mb-2" alt="vs" />
      <h5 className="card-text text-right ml-5 mr-2 mb-4">{optionTwoText}</h5>
      <Link to={"/poll/" + questionId}>
        {
          isAnswered 
            ? <button className="btn btn-info btn-block"><FontAwesomeIcon icon={faGlasses} />  View Details</button>
            : <button className="btn btn-success btn-block"><FontAwesomeIcon icon={faPoll} />   Answer Now</button>
        }
      </Link>
    </>
  )
}

export default Question