import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FarFileAlt, Text, palette } from '@behelit/components'
import { GrayCartridge } from 'components/Cartridges'
import { DefaultLink } from 'components/Links'

const TogglerIcon = styled(FarFileAlt).attrs({ size: "16px", selectable: true })`
  fill: ${palette('black80')};
`
const TogglerText = styled(Text).attrs({ weight: 400 })``

const ReadToggler = (props) => (
  <GrayCartridge as={DefaultLink} {...props}>
    <TogglerIcon />
    <TogglerText>Read</TogglerText>
  </GrayCartridge>
) 

export default ReadToggler
