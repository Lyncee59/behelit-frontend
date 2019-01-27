import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { FabLinkedin, FasSignInAlt, FasEnvelope, NavbarNav, NavbarNavItem, palette } from '@behelit/components'
import Modal from 'providers/Modal'

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > :not(:last-child) {
    margin-right: 2rem;
  }
`

const LinkedInIcon = styled(FabLinkedin)`
  fill: ${palette('cerulean')};
  &:hover { fill: ${props => darken(0.1, props.theme.palette['cerulean'])}; }
`
const MailIcon = styled(FasEnvelope)`
  fill: ${palette('white')};
  &:hover { fill: ${props => darken(0.1, props.theme.palette['white'])}; }
`
const LoginIcon = styled(FasSignInAlt)``

const MenuNavbar = () => (
  <NavbarNav width="auto">
    <NavbarNavItem>
      <IconContainer>
        <LinkedInIcon selectable size="32px" />
        <Modal name="contact">
          <MailIcon selectable size="32px" />
        </Modal>
        <Modal name="login">
          <LoginIcon selectable size="32px" />
        </Modal>
      </IconContainer>
    </NavbarNavItem>
  </NavbarNav>
)

export default MenuNavbar
