import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validators/validators'
import { Textarea } from '../common/FormsControls/FormsControls'

const maxLength100 = maxLengthCreator(100)

const AddMessageForm = ({handleSubmit}) => {

  return <form onSubmit={handleSubmit}>
    <div>
      <Field placeholder={"Enter message"} name={"newMessageText"} validate={[required, maxLength100]} component={Textarea}  />
    </div>
    <div>
      <button>Send</button>
    </div>
  </form>
}

export default reduxForm({
  form: 'messageForm'
})(AddMessageForm)