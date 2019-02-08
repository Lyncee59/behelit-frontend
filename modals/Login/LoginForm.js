import React from 'react'
import { Form as ReactForm, Field } from 'react-final-form'

import { login } from 'services/api/public'
import { required } from 'services/formHelper'
import { Button } from '@behelit/components'
import { Form, FormGroup, InputField } from 'components/Forms'
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
          <Field component={InputField} name="username" validate={required} />
        </FormGroup>
        <FormGroup>
          <GrayText>Password</GrayText>
          <Field component={InputField} name="password" type="password" validate={required} />
        </FormGroup>
        <Button disabled={invalid || pristine} type="submit">Sign in</Button>
      </Form>
    )}
  />
)

export default LoginForm
