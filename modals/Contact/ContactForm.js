import React from 'react'
import styled from 'styled-components'
import { Form as ReactForm, Field } from 'react-final-form'
import { FORM_ERROR } from 'final-form'

import { sendEmail } from 'services/api/public'
import { required, isEmail } from 'services/formHelper'
import { Button } from '@behelit/components'
import { Form, FormGroup, InputField, SelectField, TextAreaField } from 'components/Forms'
import { GrayText, GreenText, RedText } from 'components/Typography'

const ErrorLabel = styled(RedText)`
  padding: 0.5rem;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
`
const SuccessLabel = styled(GreenText)`
  padding: 0.5rem;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
`

class ContactForm extends React.PureComponent {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.subjects = [
      { text: 'General enquiries', value: 'General enquiries' },
      { text: 'Commission request', value: 'Commission request' },
      { text: 'Other', value: 'Other' }
    ]
  }

  onSubmit = async (values) => {
    return sendEmail(values)
      .catch(() => ({ [FORM_ERROR]: 'Error sending message' }))
  }

  render () {
    return (
      <ReactForm
        initialValues={{ subject: 'General enquiries' }}
        onSubmit={this.onSubmit}
        render={({ handleSubmit, invalid, pristine, submitError, submitSucceeded, submitting }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <GrayText>Subject</GrayText>
              <Field component={SelectField} items={this.subjects} name="subject" validate={required} />
            </FormGroup>
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
            <Button disabled={invalid || pristine || submitting} type="submit">Send message</Button>
            {submitError && <ErrorLabel>Could not submit message :(</ErrorLabel>}
            {submitSucceeded && <SuccessLabel>Message sent!</SuccessLabel>}
          </Form>
        )}
      />
    )
  }
}

export default ContactForm
