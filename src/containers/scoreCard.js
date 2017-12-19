import { connect } from 'react-redux'
import ScoreCard from '../components/scoreCard.js'
import { openModal } from '../actions'

const mapStateToProps = (state) => {
  return {
    yams: state.yams
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelect: (event) => {
      dispatch(openModal(event.target))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard)
