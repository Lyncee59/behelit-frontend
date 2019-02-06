import React from 'react'
import PropTypes from 'prop-types'
import { Form as ReactForm } from 'react-final-form'

import { unpublishProject } from 'services/api/private'
import { Button, ButtonGroup } from '@behelit/components'
import { GrayButton } from 'components/Buttons'
import { Form } from 'components/Forms'

class ProjectUnpublishForm extends React.PureComponent {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  async onSubmit (values) {
    const { id, onClose } = this.props

    unpublishProject(id).then(() => {
      onClose()
      location.reload()
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
              <GrayButton onClick={onClose} width='50%'>Cancel</GrayButton>
              <Button type="submit" width='50%'>Unpublish</Button>
            </ButtonGroup>
          </Form>
        )}
      />
    )
  }
}

ProjectUnpublishForm.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ProjectUnpublishForm
