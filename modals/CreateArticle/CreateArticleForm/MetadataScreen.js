import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Field } from 'react-final-form'

import { categories } from 'services/config'
import { required } from 'services/formHelper'
import { FormGroup, InputField, MultiSelectField, SelectField, TextAreaField } from 'components/Forms'
import { GrayText } from 'components/Typography'

const Wrapper = styled.div`
  display: ${(props) => props.toggled ? 'block' : 'none'};
  width: 100%;
`

const MetadataScreen = ({ tags, toggled }) => (
  <Wrapper toggled={toggled}>
    <FormGroup>
      <GrayText>Category</GrayText>
      <Field name="category" component={SelectField} items={categories.map((category) => ({ text: category, value: category }))} validate={required} />
    </FormGroup>
    <FormGroup>
      <GrayText>Tags</GrayText>
      <Field name="tags" component={MultiSelectField} items={tags.map((tag) => ({ text: tag.title, value: tag._id }))} />
    </FormGroup>
    <FormGroup>
      <GrayText>Title</GrayText>
      <Field name="title" component={InputField} validate={required} />
    </FormGroup>
    <FormGroup>
      <GrayText>Description</GrayText>
      <Field name="description" component={TextAreaField} validate={required} />
    </FormGroup>
    <FormGroup>
      <GrayText>Author</GrayText>
      <Field name="author" component={InputField} validate={required} />
    </FormGroup>
  </Wrapper>
)

MetadataScreen.propTypes = {
  tags: PropTypes.array.isRequired,
  toggled: PropTypes.bool.isRequired,
}

export default MetadataScreen
