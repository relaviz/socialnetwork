import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogsItem from './DialogsItem/DialogsItem';
import AddMessageForm from './MessageForm'


const Dialogs = ({ dialogsPage, sendMessage }) => {

  let state = dialogsPage;

  let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id} />);
  let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id} />);

  let addNewMessage = (values) => {
    sendMessage(values.newMessageText)
  }

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
          <div>{messagesElement}</div>
          <AddMessageForm onSubmit={addNewMessage} />
        </div>

      </div>
    </div>
  )
}

export default Dialogs;