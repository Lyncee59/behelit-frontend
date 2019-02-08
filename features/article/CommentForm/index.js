import React from 'react'
import styled from 'styled-components'
import { Form as ReactForm, Field } from 'react-final-form'

import { required, isEmail } from 'services/formHelper'
import { Button, palette } from '@behelit/components'
import { Form, FormGroup, InputField, TextAreaField } from 'components/Forms'
import { GrayText } from 'components/Typography'
import ToggleButton from './ToggleButton'

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
class CommentForm extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = { toggled: false }
    this.handleToggle = this.handleToggle.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.validate = this.validate.bind(this)
  }

  onSubmit () {
    console.log('onSubmit')
  }

  handleToggle () {
    const { toggled } = this.state
    this.setState({ toggled: !toggled })
  }

  validate () {
    console.log('validate')
  }

  render () {
    const { toggled } = this.state

    return (
      <Wrapper>
        <ToggleButton onClick={this.handleToggle} toggled={toggled} />
        { toggled &&
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
                  <GrayText>Comment</GrayText>
                  <Field component={TextAreaField} name="comment" validate={required} />
                </FormGroup>
                <Button disabled={invalid || pristine}>Send comment</Button>
              </Form>
            )}
            validate={this.validate}
          />
        }
      </Wrapper>
    )
  }
}

export default CommentForm
