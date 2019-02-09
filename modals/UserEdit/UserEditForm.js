import React from 'react'
import PropTypes from 'prop-types'
import { Field, Form as ReactForm } from 'react-final-form'

import { editTag } from 'services/api/private'
import { required, isEmail } from 'services/formHelper'
import { ButtonGroup, Button } from '@behelit/components'
import { GrayButton } from 'components/Buttons'
import { Form, FormGroup, InputField } from 'components/Forms'
import { GrayText } from 'components/Typography'

class UserEditForm extends React.PureComponent {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  async onSubmit (values) {
    const { user, onClose } = this.props
    editTag({ id: user._id, ...values }).then(() => {
      onClose()
      window.location.reload()
    })
  }

  render () {
    const { user, onClose } = this.props

    return (
      <ReactForm
        initialValues={user}
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
            <ButtonGroup>
              <GrayButton onClick={onClose}>Cancel</GrayButton>
              <Button disabled={invalid || pristine} type="submit">Edit</Button>
            </ButtonGroup>
          </Form>
        )}
      />
    )
  }
}

UserEditForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

export default UserEditForm
