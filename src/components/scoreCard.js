import React from 'react'
import PropTypes from 'prop-types'
import Score from './score'

const ScoreCard = ({yams, onSelect}) => (
  <table className='table table-hover'>
    <tbody>
      {
      yams.map((score) =>
        <Score
          key={score.id}
          id={score.id}
          label={score.label}
          value={score.value}
          onSelect={onSelect} />
      )
      }
    </tbody>
  </table>
)

ScoreCard.propTypes = {
  yams: PropTypes.array.isRequired
}

export default ScoreCard
