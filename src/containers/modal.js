/* globals $ */
import { connect } from 'react-redux'
import Modal from '../components/modal.js'
import { closeModal, updateScore, resetScore, crossScore } from '../actions'

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
    },
    onValidate: (event) => {
      dispatch(updateScore(event.target.value))
      $('#myModal').modal('hide')
    },
    onReset: () => {
      dispatch(resetScore())
      $('#myModal').modal('hide')
    },
    onCross: () => {
      dispatch(crossScore())
      $('#myModal').modal('hide')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
