import React from 'react'
import PropTypes from 'prop-types'
import Score from './score'

const ScoreCard = ({yams, onScoreSelect}) => (
  <table className='table table-hover'>
    <tbody>
      {
      yams.map((score) =>
        <Score
          key={score.id}
          id={score.id}
          label={score.label}
          value={score.value}
          type={score.type}
          onScoreSelect={onScoreSelect} />
      )
      }
    </tbody>
  </table>
)

ScoreCard.propTypes = {
  yams: PropTypes.array.isRequired
}

export default ScoreCard
