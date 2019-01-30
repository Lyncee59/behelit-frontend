import React from 'react'
import PropTypes from 'prop-types'
import { Form as ReactForm, Field } from 'react-final-form'

import { required, isEmail } from 'services/formHelper'
import { Button, palette } from '@behelit/components'
import { Form, FormGroup, InputField, TextAreaField } from 'components/Forms'
import { GrayText } from 'components/Typography'

class DeleteArticleForm extends React.PureComponent {
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
        validate={this.validate}
        render={({ handleSubmit, pristine, invalid }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <GrayText>Title</GrayText>
              <Field name="title" component={InputField} validate={required} />
            </FormGroup>
            <FormGroup>
              <GrayText>Description</GrayText>
              <Field name="description" component={TextAreaField} validate={required} />
            </FormGroup>
            <FormGroup>
              <GrayText>Content</GrayText>
              <Field name="content" component={TextAreaField} validate={required} />
            </FormGroup>
            <Button disabled={pristine || invalid}>Create Article</Button>
          </Form>
        )}
      />
    )
  }
}

export default DeleteArticleForm
