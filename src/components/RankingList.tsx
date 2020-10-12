import React from 'react'
import Ranking, { RankingProps } from './Ranking'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap'

export interface RankingListProps {
  ranking: Array<RankingProps>
}

const RankingList: React.FC<RankingListProps> = (props) => {
  const { ranking } = props
  return (
    <>
      {ranking.map((rankingProps, index) => {
        return (
          <Ranking key={index} {...rankingProps} />
        )
      })}
    </>
  )
}

export default RankingList