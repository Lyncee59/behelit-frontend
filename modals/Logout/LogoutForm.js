import React from 'react'
import PropTypes from 'prop-types'
import { Form as ReactForm } from 'react-final-form'

import { logout } from 'services/api/public'
import { Button, ButtonGroup } from '@behelit/components'
import { GrayButton } from 'components/Buttons'
import { Form } from 'components/Forms'

const onSubmit = async ({ username }) => {
  // logout(username).then(() => {
    // window.location = '/admin'
  // })
}

const LogoutForm = ({ onClose }) => (
  <ReactForm
    onSubmit={onSubmit}
    render={({ handleSubmit, pristine, invalid }) => (
      <Form onSubmit={handleSubmit}>
        <ButtonGroup>
          <GrayButton onClick={onClose} width="50%">Cancel</GrayButton>
          <Button type="submit" width="50%">Sign out</Button>
        </ButtonGroup>
      </Form>
    )}
  />
)

LogoutForm.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default LogoutForm
