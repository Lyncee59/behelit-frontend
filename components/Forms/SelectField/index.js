import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { config, categories } from 'services/config'
import { CrimsonText } from 'components/Typography'
import { Select, Option } from 'components/SelectInput'

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
    <Select {...input} {...rest}>
      {items.map((item, index) => <Option value={item.value}>{item.text}</Option>)}
    </Select>
    {meta.error && meta.touched && <ErrorLabel size='0.9rem'>{meta.error}</ErrorLabel>}
  </Wrapper>
)

SelectField.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })).isRequired,
  value: PropTypes.string,
}

SelectField.defaultProps = {
  items: []
}

export default SelectField
