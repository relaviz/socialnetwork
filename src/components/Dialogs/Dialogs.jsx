import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogsItem from './DialogsItem/DialogsItem';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state';


const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />);
  let messagesElement = state.messages.map(m => <Message message={m.message} />);

  let newMessageElement = React.createRef();

  let newMessageBody = state.newMessageBody

  let oneSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
          {messagesElement}
          <div>
            <textarea onChange={onNewMessageChange}
            placeholder='Enter message' value={newMessageBody} ref={newMessageElement} ></textarea>
          </div>
          <div>
            <button onClick={oneSendMessageClick} >Add message</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dialogs;