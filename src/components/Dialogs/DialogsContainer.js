import React from 'react';
import {addMessageCreator} from './../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageText) => {
      dispatch(addMessageCreator(newMessageText))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)