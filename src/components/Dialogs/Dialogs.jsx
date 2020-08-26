import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogsItem from './DialogsItem/DialogsItem';


const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />);
  let messagesElement = props.state.messages.map(m => <Message message={m.message} />);

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
          {messagesElement}
        </div>
      </div>
    </div>
  )
}

export default Dialogs;