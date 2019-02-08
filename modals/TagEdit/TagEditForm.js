import React from 'react'
import PropTypes from 'prop-types'
import { Field, Form as ReactForm } from 'react-final-form'

import { editTag } from 'services/api/private'
import { required } from 'services/formHelper'
import { ButtonGroup, Button } from '@behelit/components'
import { GrayButton } from 'components/Buttons'
import { Form, FormGroup, InputField } from 'components/Forms'
import { GrayText } from 'components/Typography'

class TagEditForm extends React.PureComponent {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  async onSubmit (values) {
    const { tag, onClose } = this.props
    editTag({ id: tag._id, ...values }).then(() => {
      onClose()
      window.location.reload()
    })
  }

  render () {
    const { tag, onClose } = this.props

    return (
      <ReactForm
        initialValues={tag}
        onSubmit={this.onSubmit}
        render={({ handleSubmit, pristine, invalid, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <GrayText>Title</GrayText>
              <Field component={InputField} name="title" validate={required} />
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

TagEditForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  tag: PropTypes.object.isRequired
}

export default TagEditForm
