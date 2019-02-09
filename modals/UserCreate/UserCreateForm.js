import React from 'react'
import PropTypes from 'prop-types'
import { Field, Form as ReactForm } from 'react-final-form'

import { createUser } from 'services/api/private'
import { required, isEmail } from 'services/formHelper'
import { ButtonGroup, Button } from '@behelit/components'
import { GrayButton } from 'components/Buttons'
import { Form, FormGroup, InputField } from 'components/Forms'
import { GrayText } from 'components/Typography'

class UserCreateForm extends React.PureComponent {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  async onSubmit (values) {
    const { onClose } = this.props
    createUser(values).then(() => {
      onClose()
      window.location.reload()
    })
  }

  render () {
    const { onClose } = this.props

    return (
      <ReactForm
        onSubmit={this.onSubmit}
        render={({ handleSubmit, pristine, invalid, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <GrayText>Username</GrayText>
              <Field component={InputField} name="username" validate={required} />
            </FormGroup>
            <FormGroup>
              <GrayText>Email</GrayText>
              <Field component={InputField} name="email" validate={isEmail} />
            </FormGroup>
            <FormGroup>
              <GrayText>Password</GrayText>
              <Field component={InputField} name="password" type="password" validate={required} />
            </FormGroup>
            <ButtonGroup>
              <GrayButton onClick={onClose}>Cancel</GrayButton>
              <Button disabled={invalid || pristine} type="submit">Create</Button>
            </ButtonGroup>
          </Form>
        )}
      />
    )
  }
}

UserCreateForm.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default UserCreateForm
