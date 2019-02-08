import React from 'react'
import PropTypes from 'prop-types'

import { CrimsonButton, GrayButton } from 'components/Buttons'

const ToggleButton = ({ toggled, ...rest }) => toggled
  ? <GrayButton {...rest}>Cancel</GrayButton>
  : <CrimsonButton {...rest}>Leave a comment</CrimsonButton>

ToggleButton.propTypes = {
  toggled: PropTypes.bool
}

export default ToggleButton
