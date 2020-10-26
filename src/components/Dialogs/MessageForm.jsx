import React from 'react'
import { Field, reduxForm } from 'redux-form'

let MessageForm = props => {

  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field placeholder={"Enter message"} name={"messageText"} component={"textarea"} />
    </div>
    <div>
      <button>Add message</button>
    </div>
  </form>
}

let MessageReduxForm = reduxForm({
  form: 'message'
})(MessageForm)

let DialogForm = (props) => {
  const onSubmit = (messageText) => {
      console.log(messageText)
  }
  return <div> 
    <MessageReduxForm onSubmit={onSubmit} />
  </div>
}

export default DialogForm