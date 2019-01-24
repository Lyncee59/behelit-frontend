import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TextArea } from '@behelit/components'
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

const InputField = ({ input, meta, ...rest }) => (
  <Wrapper {...rest}>
    <TextArea {...input} />
    {meta.error && meta.touched && <ErrorLabel size='0.9rem'>{meta.error}</ErrorLabel>}
  </Wrapper>
)

export default InputField