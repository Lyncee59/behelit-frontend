import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Form as ReactForm, Field } from 'react-final-form'
import { FORM_ERROR } from 'final-form'

import { createComment } from 'services/api/public'
import { required, isEmail } from 'services/formHelper'
import { Button, palette } from '@behelit/components'
import { Form, FormGroup, InputField, TextAreaField } from 'components/Forms'
import { GrayText, GreenText, RedText } from 'components/Typography'
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

class CommentForm extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = { toggled: false }
    this.handleToggle = this.handleToggle.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit = async (values) => {
    const { article } = this.props
    return createComment({ articleId: article._id, ...values })
      .then(() => window.location.reload())
      .catch(() => ({ [FORM_ERROR]: 'Error submitting comment' }))
  }

  handleToggle () {
    const { toggled } = this.state
    this.setState({ toggled: !toggled })
  }

  render () {
    const { toggled } = this.state

    return (
      <Wrapper>
        <ToggleButton onClick={this.handleToggle} toggled={toggled} />
        { toggled &&
          <ReactForm
            onSubmit={this.onSubmit}
            render={({ handleSubmit, invalid, pristine, submitError, submitSucceeded, submitting }) => (
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
                  <Field component={TextAreaField} name="message" validate={required} />
                </FormGroup>
                <Button disabled={invalid || pristine || submitting} type="submit">Send comment</Button>
                {submitError && <ErrorLabel>Could not send comment :(</ErrorLabel>}
                {submitSucceeded && <SuccessLabel>Comment sent!</SuccessLabel>}
              </Form>
            )}
          />
        }
      </Wrapper>
    )
  }
}

CommentForm.propTypes = {
  article: PropTypes.object.isRequired
}

export default CommentForm
