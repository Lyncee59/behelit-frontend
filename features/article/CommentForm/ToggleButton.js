import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { CrimsonButton, GrayButton } from 'components/Buttons'

const ToggleButton = ({ toggled, ...rest }) => toggled
  ? <GrayButton {...rest}>Cancel</GrayButton>
  : <CrimsonButton {...rest}>Leave a comment</CrimsonButton>

export default ToggleButton
