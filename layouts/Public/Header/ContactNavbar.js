import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { FabLinkedin, FasEnvelope, NavbarNav, NavbarNavItem, palette } from '@behelit/components'
import { Contact } from 'modals'
import Modal from 'providers/Modal'

const LinkedInIcon = styled(FabLinkedin)`
  fill: ${palette('cerulean')};
  &:hover { fill: ${props => darken(0.1, props.theme.palette['cerulean'])}; }
`
const MailIcon = styled(FasEnvelope)`
  fill: ${palette('cerulean')};
  &:hover { fill: ${props => darken(0.1, props.theme.palette['cerulean'])}; }
`

const ContactNavbar = () => (
  <NavbarNav width="6rem">
    <NavbarNavItem>
      <LinkedInIcon selectable size="32px" />
    </NavbarNavItem>
    <NavbarNavItem>
      <Modal name="contact">
        <MailIcon selectable size="32px" />
      </Modal>
    </NavbarNavItem>
  </NavbarNav>
)

export default ContactNavbar
