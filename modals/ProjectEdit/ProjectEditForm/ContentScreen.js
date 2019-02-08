import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Field } from 'react-final-form'

import { palette } from '@behelit/components'
import { required } from 'services/formHelper'
import { FormGroup, TextAreaField } from 'components/Forms'
import { Markdown } from 'components/Markdown'
import { GrayText } from 'components/Typography'

const Wrapper = styled.div`
  display: ${(props) => props.toggled ? 'block' : 'none'};
  width: 100%;
`
const MarkdownContainer = styled.div`
  width: 100%;
  height: 200px;
  padding: 0 1.4rem;
  box-sizing: border-box;
  background-color: ${palette('gray1')};
  border-width: 1px;
  border-color: ${palette('gray2')};
  border-style: solid;
  border-radius: 0.125rem;
  overflow-y: auto;
`

const ContentScreen = ({ description, toggled }) => (
  <Wrapper toggled={toggled}>
    <FormGroup>
      <GrayText>Description</GrayText>
      <Field component={TextAreaField} height="200px" name="description" validate={required} />
    </FormGroup>
    <FormGroup>
      <GrayText>Preview</GrayText>
      <MarkdownContainer>
        <Markdown content={description} />
      </MarkdownContainer>
    </FormGroup>
  </Wrapper>
)

ContentScreen.propTypes = {
  description: PropTypes.string,
  toggled: PropTypes.bool.isRequired
}

export default ContentScreen
