import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlasses, faPoll } from '@fortawesome/free-solid-svg-icons'
import imgVs from '../assets/img_vs.png'

const Question: React.FC = (props: any) => {
  return (
    <>
      <h5 className="card-title">Would you rather</h5>
      <p className="card-text text-left ml-2 mr-5">Option One Option One Option One Option One Option One Option One</p>
      <img src={imgVs} className="mx-auto img-10 mb-2" alt="vs" />
      <p className="card-text text-right ml-5 mr-2">Option Two Option Two Option Two Option Two Option Two Option Two</p>
      <button className="btn btn-info btn-block"><FontAwesomeIcon icon={faGlasses} />  View Details</button>
      <button className="btn btn-success btn-block"><FontAwesomeIcon icon={faPoll} />   Answer Now</button>
    </>
  )
}

export default Question