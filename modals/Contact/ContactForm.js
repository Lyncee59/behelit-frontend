import React from 'react'
import { Form as ReactForm, Field } from 'react-final-form'

import { required, isEmail } from 'services/formHelper'
import { Button } from '@behelit/components'
import { Form, FormGroup, InputField, TextAreaField } from 'components/Forms'
import { GrayText } from 'components/Typography'

class ContactForm extends React.PureComponent {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.validate = this.validate.bind(this)
  }

  onSubmit () {
    console.log('onSubmit')
  }

  validate () {
    console.log('validate')
  }

  render () {
    return (
      <ReactForm
        onSubmit={this.onSubmit}
        render={({ handleSubmit, invalid, pristine }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <GrayText>Name</GrayText>
              <Field component={InputField} name="name" validate={required} />
            </FormGroup>
            <FormGroup>
              <GrayText>Email</GrayText>
              <Field component={InputField} name="email" validate={isEmail} />
            </FormGroup>
            <FormGroup>
              <GrayText>Message</GrayText>
              <Field component={TextAreaField} name="message"validate={required} />
            </FormGroup>
            <Button disabled={invalid || pristine}>Send message</Button>
          </Form>
        )}
        validate={this.validate}
      />
    )
  }
}

export default ContactForm
