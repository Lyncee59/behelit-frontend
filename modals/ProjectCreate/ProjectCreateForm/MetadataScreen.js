import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Field } from 'react-final-form'

import { required } from 'services/formHelper'
import { FormGroup, InputField, MultiSelectField, TextAreaField } from 'components/Forms'
import { GrayText } from 'components/Typography'

const Wrapper = styled.div`
  display: ${(props) => props.toggled ? 'block' : 'none'};
  width: 100%;
`

const MetadataScreen = ({ tags, toggled }) => (
  <Wrapper toggled={toggled}>
    <FormGroup>
      <GrayText>Tags</GrayText>
      <Field component={MultiSelectField} items={tags.map((tag) => ({ text: tag.title, value: tag._id }))} name="tags" />
    </FormGroup>
    <FormGroup>
      <GrayText>Title</GrayText>
      <Field component={InputField} name="title" validate={required} />
    </FormGroup>
    <FormGroup>
      <GrayText>Summary</GrayText>
      <Field component={TextAreaField} name="summary" validate={required} />
    </FormGroup>
    <FormGroup>
      <GrayText>Company</GrayText>
      <Field component={InputField} name="company" validate={required} />
    </FormGroup>
    <FormGroup>
      <GrayText>Year</GrayText>
      <Field component={InputField} name="year" validate={required} />
    </FormGroup>
  </Wrapper>
)

MetadataScreen.propTypes = {
  tags: PropTypes.array.isRequired,
  toggled: PropTypes.bool.isRequired
}

export default MetadataScreen
