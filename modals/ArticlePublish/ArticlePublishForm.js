import React from 'react'
import PropTypes from 'prop-types'
import { Form as ReactForm } from 'react-final-form'

import { publishArticle } from 'services/api/private'
import { ButtonGroup } from '@behelit/components'
import { GrayButton, GreenButton } from 'components/Buttons'
import { Form } from 'components/Forms'

class ArticlePublishForm extends React.PureComponent {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  async onSubmit (values) {
    const { id, onClose } = this.props

    publishArticle(id).then(() => {
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
              <GreenButton type="submit" width='50%'>Publish</GreenButton>
            </ButtonGroup>
          </Form>
        )}
      />
    )
  }
}

ArticlePublishForm.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ArticlePublishForm
