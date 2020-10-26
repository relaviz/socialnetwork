import { sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
};
let mapDispatchToProps = (dispatch) => {
  return {
      sendMessage: (newMessageText) => {
      dispatch(sendMessageCreator(newMessageText))
    }
  }
}

export default compose (
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(Dialogs);