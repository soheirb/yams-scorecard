// /* global $ */
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import logo from './logo.svg'
import './App.css'
import ScoreCard from './containers/scoreCard'
import Modal from './containers/modal'

class App extends Component {
  render() {
    if ( this.props.selectedScore ) {
      // $('#myModal').modal()
    }
    return (
      <div className='App'>
        { /* <header className='App-header'>
          <h4>Yams Score Card</h4>
        </header> */
        }
        <ScoreCard />
        {
          this.props.displayModal && ( <Modal /> )          
        }    
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    displayModal: state.displayModal
  }
}

export default connect(mapStateToProps)(App)
 