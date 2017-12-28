import { connect } from 'react-redux'
import ScoreCard from '../components/scoreCard.js'
import { openModal } from '../actions'

const mapStateToProps = (state, { score, type }) => {
  return {
    score,
    type
  }
}

const mapDispatchToProps = (dispatch, { type }) => {
  return {
    onScoreSelect: (event) => {
      dispatch(openModal(event.currentTarget, type))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard)
