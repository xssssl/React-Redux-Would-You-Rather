import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import OptionResult from './OptionResult'

describe('component OptionResult', () => {
  it('should render correctly when option one is selected', () => {
    const optionResultTestingProps = {
      isVoteOptionOne: false,
      optionOneText: 'be a famous inventor',
      optionOneVotes: {
        obtainedVotes: 4,
        totalVotes: 11
      },
      optionTwoText: 'be a famous writer',
      optionTwoVotes: {
        obtainedVotes: 7,
        totalVotes: 11
      }
    }
    render(
      <Router>
        <OptionResult
          {...optionResultTestingProps}
        />
      </Router>
    )
    const optionOneTextElement = screen.getByText(optionResultTestingProps.optionOneText)
    const optionTwoTextElement = screen.getByText(optionResultTestingProps.optionTwoText)
    const votedOptionElement = screen.getByText('Your Vote')

    expect(optionOneTextElement).toBeTruthy()
    expect(optionTwoTextElement).toBeTruthy()
    expect(votedOptionElement).toHaveAttribute('data-testid', 'option-two-voted')
  })

  it('should render correctly when option two is selected', () => {
    const optionResultTestingProps = {
      isVoteOptionOne: true,
      optionOneText: 'be a famous inventor',
      optionOneVotes: {
        obtainedVotes: 4,
        totalVotes: 11
      },
      optionTwoText: 'be a famous writer',
      optionTwoVotes: {
        obtainedVotes: 7,
        totalVotes: 11
      }
    }
    render(
      <Router>
        <OptionResult
          {...optionResultTestingProps}
        />
      </Router>
    )
    const optionOneTextElement = screen.getByText(optionResultTestingProps.optionOneText)
    const optionTwoTextElement = screen.getByText(optionResultTestingProps.optionTwoText)
    const votedOptionElement = screen.getByText('Your Vote')

    expect(optionOneTextElement).toBeTruthy()
    expect(optionTwoTextElement).toBeTruthy()
    expect(votedOptionElement).toHaveAttribute('data-testid', 'option-one-voted')
  })
})