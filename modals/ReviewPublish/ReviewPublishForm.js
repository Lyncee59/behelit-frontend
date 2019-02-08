import React from 'react'
import PropTypes from 'prop-types'
import { Form as ReactForm } from 'react-final-form'

import { publishReview } from 'services/api/private'
import { ButtonGroup } from '@behelit/components'
import { GrayButton, GreenButton } from 'components/Buttons'
import { Form } from 'components/Forms'

class ReviewPublishForm extends React.PureComponent {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  async onSubmit (values) {
    const { id, onClose } = this.props

    publishReview(id).then(() => {
      onClose()
      window.location.reload()
    })
  }

  render () {
    const { onClose } = this.props

    return (
      <ReactForm
        onSubmit={this.onSubmit}
        render={({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <ButtonGroup>
              <GrayButton onClick={onClose} width="50%">Cancel</GrayButton>
              <GreenButton type="submit" width="50%">Publish</GreenButton>
            </ButtonGroup>
          </Form>
        )}
      />
    )
  }
}

ReviewPublishForm.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
}

export default ReviewPublishForm
