import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { NavbarNav, NavbarNavItem, palette } from '@behelit/components'
import Modal from 'providers/Modal'
import { CrimsonText } from 'components/Typography'

const BreadcrumbNavbar = () => (
  <NavbarNav width="6rem">
    <NavbarNavItem>
      <CrimsonText>
        Breadcrumb
      </CrimsonText>
    </NavbarNavItem>
  </NavbarNav>
)

export default BreadcrumbNavbar
