import React from 'react'

import { FasSignInAlt, NavbarNav, NavbarNavItem } from '@behelit/components'
import Modal from 'providers/Modal'
import { CrimsonText } from 'components/Typography'

const AuthNavbar = () => (
  <NavbarNav width="10rem">
    <NavbarNavItem>
      <CrimsonText size="1.2rem" weight={700}>
        Lyncee
      </CrimsonText>
    </NavbarNavItem>
    <NavbarNavItem>
      <Modal name="logout">
        <FasSignInAlt selectable size="32px" />
      </Modal>
    </NavbarNavItem>
  </NavbarNav>
)

export default AuthNavbar
