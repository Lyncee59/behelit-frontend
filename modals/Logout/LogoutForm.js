import React from 'react'
import PropTypes from 'prop-types'
import { Form as ReactForm, Field } from 'react-final-form'

import { required } from 'services/formHelper'
import { ButtonGroup, palette } from '@behelit/components'
import { GrayButton, GreenButton } from 'components/Buttons'
import { Form } from 'components/Forms'

const onSubmit = async ({ username }) => {
  logout(username).then(() => {
    // window.location = '/admin'
  })
}

const LogoutForm = ({ handleClose }) => (
  <ReactForm
    onSubmit={onSubmit}
    render={({ handleSubmit, pristine, invalid }) => (
      <Form onSubmit={handleSubmit}>
        <ButtonGroup>
          <GrayButton onClick={handleClose} width='50%'>Confirm</GrayButton>
          <GreenButton type="submit" width='50%'>Sign out</GreenButton>
        </ButtonGroup>
      </Form>
    )}
  />
)

export default LogoutForm
