import { connect } from 'react-redux'
import Modal from '../components/modal.js'
import { closeModal, updateScore } from '../actions'

const mapStateToProps = (state) => {
  return {
    score: state.selectedScore
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClose: () => {
      dispatch(closeModal())
    },
    onScoreChange: (event) => {
      dispatch(updateScore(event.target.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
