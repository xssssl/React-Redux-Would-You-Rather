import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Ranking, { RankingProps } from './Ranking'

describe('component Ranking', () => {
  it('should render correctly', () => {
    const testingRankingProps: RankingProps = {
      displayedAuthor: 'James',
      avatarURL: '/assets/avatar.png',
      ranking: 'silver',
      createdQuestions: 3,
      answeredQuestions: 6
    }
    render(
      <Ranking {...testingRankingProps} />
    )
    
    const displayedAuthor = screen.getByText(/James/i)
    const createdQuestions = screen.getByText(/Created questions: 3/i)
    const answeredQuestions = screen.getByText(/Answered questions: 6/i)
    const totalScores = screen.getByText(/Total scores: 9/i)

    expect(displayedAuthor).toBeTruthy()
    expect(createdQuestions).toBeTruthy()
    expect(answeredQuestions).toBeTruthy()
    expect(totalScores).toBeTruthy()
  })
})