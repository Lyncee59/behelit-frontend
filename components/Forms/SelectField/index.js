import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import SelectInput from 'components/SelectInput'
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

const SelectField = ({ input, meta, items, ...rest }) => (
  <Wrapper>
    <SelectInput {...input} items={items} {...rest} />
    {meta.error && meta.touched && <ErrorLabel size="0.9rem">{meta.error}</ErrorLabel>}
  </Wrapper>
)

SelectField.propTypes = {
  input: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })).isRequired,
  meta: PropTypes.object.isRequired,
  value: PropTypes.string
}

SelectField.defaultProps = {
  items: []
}

export default SelectField
