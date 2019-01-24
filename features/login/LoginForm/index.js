import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Form as ReactForm, Field } from 'react-final-form'

import { required, isEmail } from 'services/formHelper'
import { Button, palette } from '@behelit/components'
import { Form, FormGroup, InputField, TextAreaField } from 'components/Forms'
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
class ReviewForm extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = { toggled: false }
    this.handleToggle = this.handleToggle.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.validate = this.validate.bind(this)
  }

  handleToggle () {
    const { toggled } = this.state
    this.setState({ toggled: !toggled })
  }

  onSubmit () {
    console.log('onSubmit')
  }

  validate () {
    console.log('validate')
  }

  render () {
    const { toggled } = this.state

    return (
      <Wrapper>
        <ReactForm
          onSubmit={this.onSubmit}
          validate={this.validate}
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
              <Button disabled={pristine || invalid}>Sign in</Button>
            </Form>
          )}
        />
      </Wrapper>
    )
  }
}

export default ReviewForm
