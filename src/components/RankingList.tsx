import React from 'react'
import Ranking from './Ranking'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

const RankingList: React.FC = (props: any) => {
  return (
    <>
      <Ranking />
      <Ranking />
      <Ranking />
    </>
  )
}

export default RankingList