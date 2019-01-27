import React from 'react'
import PropTypes from 'prop-types'
import { Form as ReactForm, Field } from 'react-final-form'

import { required } from 'services/formHelper'
import { Button, palette } from '@behelit/components'
import { Form, FormGroup, InputField, TextAreaField } from 'components/Forms'
import { GrayText } from 'components/Typography'

const onSubmit = async ({ username, password }) => {
  login(username, password).then(() => {
    // window.location = '/admin'
  })
}

const LoginForm = () => (
  <ReactForm
    onSubmit={onSubmit}
    render={({ handleSubmit, pristine, invalid }) => (
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <GrayText>Username</GrayText>
          <Field name="username" component={InputField} validate={required} />
        </FormGroup>
        <FormGroup>
          <GrayText>Password</GrayText>
          <Field name="password" component={InputField} validate={required} type='password' />
        </FormGroup>
        <Button disabled={pristine || invalid} type="submit">Sign in</Button>
      </Form>
    )}
  />
)

export default LoginForm
