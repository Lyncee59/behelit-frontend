import React from 'react'
import styled from 'styled-components'
import { Form as ReactForm, Field } from 'react-final-form'
import { FORM_ERROR } from 'final-form'

import { createReview } from 'services/api/public'
import { required } from 'services/formHelper'
import { Button, palette } from '@behelit/components'
import { Form, FormGroup, InputField, TextAreaField } from 'components/Forms'
import { GrayText, GreenText, RedText } from 'components/Typography'

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

class ReviewForm extends React.PureComponent {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit = async (values) => {
    return createReview(values)
      .catch(() => ({ [FORM_ERROR]: 'Error submitting review' }))
  }

  render () {
    return (
      <Wrapper>
        <ReactForm
          onSubmit={this.onSubmit}
          render={({ handleSubmit, invalid, pristine, submitError, submitSucceeded, submitting }) => (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <GrayText>Name</GrayText>
                <Field component={InputField} name="name" validate={required} />
              </FormGroup>
              <FormGroup>
                <GrayText>Company</GrayText>
                <Field component={InputField} name="company" />
              </FormGroup>
              <FormGroup>
                <GrayText>Role</GrayText>
                <Field component={InputField} name="role" validate={required} />
              </FormGroup>
              <FormGroup>
                <GrayText>Message</GrayText>
                <Field component={TextAreaField} name="message" validate={required} />
              </FormGroup>
              <Button disabled={invalid || pristine || submitting} type="submit">Send review</Button>
              {submitError && <ErrorLabel>Could not submit review :(</ErrorLabel>}
              {submitSucceeded && <SuccessLabel>Review submitted!</SuccessLabel>}
            </Form>
          )}
        />
      </Wrapper>
    )
  }
}

export default ReviewForm
