import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import MultiSelectInput from 'components/MultiSelectInput'
import { CrimsonText } from 'components/Typography'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;

  & > :not(:first-child) {
    margin-top: 0.2rem;
  }
`
const ErrorLabel = styled(CrimsonText)`
  position: absolute;
  top: -20px;
  right: 0;
`

const MultiSelectField = ({ input, meta, ...rest }) => (
  <Wrapper>
    <MultiSelectInput {...input} {...rest} />
    {meta.error && meta.touched && <ErrorLabel size="0.9rem">{meta.error}</ErrorLabel>}
  </Wrapper>
)

MultiSelectField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
}

export default MultiSelectField
