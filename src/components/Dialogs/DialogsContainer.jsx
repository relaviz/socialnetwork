import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContex';


const DialogsContainer = () => {

  return <StoreContext.Consumer> 
    {(store) => {
      let state = store.getState().dialogsPage;

      let oneSendMessageClick = () => {
        store.dispatch(sendMessageCreator())
      };
      let onNewMessageChange = (body) => {
        store.dispatch(updateNewMessageBodyCreator(body))
      };
      return <Dialogs updateNewMessageBody={onNewMessageChange}
        sendMessage={oneSendMessageClick}
        dialogsPage={state} />
    }
  }
  </StoreContext.Consumer>
}

  export default DialogsContainer;