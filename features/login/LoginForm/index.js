import React from 'react'
import styled from 'styled-components'
import { Form as ReactForm, Field } from 'react-final-form'

import { login } from 'services/api/public'
import { required } from 'services/formHelper'
import { Button, palette } from '@behelit/components'
import { Form, FormGroup, InputField } from 'components/Forms'
import { GrayText } from 'components/Typography'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 1rem;
  margin-bottom: 0.5rem;
  box-sizing: border-box;
  background: ${palette('gray1')};
  border: 1px solid ${palette('gray2')};
  border-radius: 5px;
`

const onSubmit = async ({ username, password }) => {
  login(username, password).then(() => {
    // window.location = '/admin'
  })
}

const ReviewForm = () => (
  <Wrapper>
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
  </Wrapper>
)

export default ReviewForm
