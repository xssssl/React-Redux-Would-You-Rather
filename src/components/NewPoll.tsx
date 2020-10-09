import React, { useState, BaseSyntheticEvent } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleAddQuestion } from '../actions/shared'
import RootState from '../types/RootState'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const NewPoll: React.FC<NewPollPropsFromRedux> = (props) => {
  const { author } = props
  const { handleAddQuestion } = props

  const [optionOneText, setOptionOneText] = useState('')
  const [optionTwoText, setOptionTwoText] = useState('')
  const [isVoteAttempt, setIsVoteAttempt] = useState(false)

  const isValidOption = (optionText: string) => {
    const re = /^[\w\s]{5,64}$/
    return re.test(optionText)
  }

  const handleOnClick = (e: BaseSyntheticEvent): void => {
    // e.preventDefault()
    setIsVoteAttempt(true)
    isValidOption(optionOneText) && isValidOption(optionTwoText) && handleAddQuestion({
      optionOneText,
      optionTwoText,
      author
    })
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4 offset-sm-4">
          <form className={isVoteAttempt ? "was-validated" : ""}>
            <div className="text-center">
              <img className="img-avatar mt-4 mb-4" src='/assets/logo2.png' alt="would you rather"/>
            </div>
            <div className="form-group">
              <label className="col-form-label" htmlFor="NewPollOptionOne">Option One:</label>
              <input 
                type="text" 
                className="form-control" 
                id="NewPollOptionOne" 
                placeholder="Option One" 
                onChange={(event) => setOptionOneText(event.target.value)}
                pattern="^[\w\s]{5,64}$"
                required
              />
              <div className="invalid-feedback">
                should be between 5 and 64 characters in length
              </div>
            </div>
            <div className="form-group">
              <label className="col-form-label" htmlFor="NewPollOptionTwo">Option Two:</label>
              <input 
                type="text" 
                className="form-control"
                id="NewPollOptionTwo" 
                placeholder="Option Two" 
                onChange={(event) => setOptionTwoText(event.target.value)}
                pattern="^[\w\s]{5,64}$"
                required
              />
              <div className="invalid-feedback">
                should be between 5 and 64 characters in length
              </div>
            </div>
            <div className="form-group row mt-5">
              <div className="col-sm-12">
                <Link to="/">
                  <button 
                    type="submit"
                    className="btn btn-info btn-block"
                    id='createNewPollBtn'
                    onClick={(e: BaseSyntheticEvent) => handleOnClick(e)}
                  >
                    <FontAwesomeIcon icon={faPlusSquare} /> Create
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

interface MapStateToPropsType {
  author: string
}

const mapStateToProps = (state: RootState): MapStateToPropsType => ({
  author: state.userAuth.id
})

const mapDispatchToProps = { handleAddQuestion }

const connector = connect(mapStateToProps, mapDispatchToProps)

type NewPollPropsFromRedux = ConnectedProps<typeof connector>

const ConnectedNewPoll = connector(NewPoll)

export default ConnectedNewPoll