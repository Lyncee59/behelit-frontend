import React from 'react'
import PropTypes from 'prop-types'

import Inline from './Inline'
import Multiline from './Multiline'

const PrismCode = ({ code, inline }) => inline
  ? <Inline code={code} />
  : <Multiline code={code} />

PrismCode.propTypes = {
  code: PropTypes.string,
  inline: PropTypes.bool
}

PrismCode.defaultProps = {
  inline: false
}

export default PrismCode
