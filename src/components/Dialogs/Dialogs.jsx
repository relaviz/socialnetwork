import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogsItem from './DialogsItem/DialogsItem';
import { Field, reduxForm } from 'redux-form';


const Dialogs = (props) => {

  let state = props.dialogsPage;

let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id} />);
let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id} />);

let addNewMessage = (values) => {
  props.sendMessage(values.newMessageText)
}

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
          <div>{messagesElement}</div>
          <MessageReduxForm onSubmit={addNewMessage} />
        </div>

      </div>
    </div>
  )
}

const AddMessageForm = props => {

  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field placeholder={"Enter message"} name={"newMessageText"} component={"textarea"} />
    </div>
    <div>
      <button>Add message</button>
    </div>
  </form>
}

const MessageReduxForm = reduxForm({
  form: 'messageForm'
})(AddMessageForm)

export default Dialogs;