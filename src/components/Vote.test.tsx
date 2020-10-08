import React from 'react'
// import { HandleThunkActionCreator } from 'react-redux'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
// import { CreateAnswerRequest } from '../services/types'
import Vote from './Vote'
// import { handleAddAnswer } from '../actions/shared'

describe('component Vote', () => {
  it('should render correctly', () => {
    const handleAddAnswer = jest.fn()
    const voteTestingProps = {
      authedUser: 'Michale Jackson',
      qid: 'abcd1234',
      optionOneText: 'be a famous inventor',
      optionTwoText: 'be a famous writer',
      // handleAddAnswer: (arg: CreateAnswerRequest) => new Promise<void>(() => {})
      handleAddAnswer: handleAddAnswer
    }
    render(
      <Vote {...voteTestingProps} />
    )
    const optionOneTextElement = screen.getByText(voteTestingProps.optionOneText)
    const optionTwoTextElement = screen.getByText(voteTestingProps.optionTwoText)
    const voteBtn = screen.getByTestId('vote-btn')

    expect(optionOneTextElement).toBeTruthy()
    expect(optionTwoTextElement).toBeTruthy()
    fireEvent.click(voteBtn)
    expect(handleAddAnswer).toBeCalledTimes(1)
  })
})