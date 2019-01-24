import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

import { getRouterPathname } from 'services/url'
import { NavbarNav, NavbarNavItem } from '@behelit/components'
import { WhiteLink } from 'components/Links'

const NavigationNavbar = () => {
  const pathname = getRouterPathname()

  return (
    <NavbarNav width="25rem">
      <NavbarNavItem>
        <WhiteLink href='/' selected={pathname === '/landing'} size='1.2rem'>Blog</WhiteLink>
      </NavbarNavItem>
        <NavbarNavItem>
        <WhiteLink href='/projects' selected={pathname === '/projects'} size='1.2rem'>Projects</WhiteLink>
      </NavbarNavItem>
        <NavbarNavItem>
        <WhiteLink href='/reviews' selected={pathname === '/reviews'} size='1.2rem'>Reviews</WhiteLink>
      </NavbarNavItem>
      <NavbarNavItem>
        <WhiteLink href='/about' selected={pathname === '/about'} size='1.2rem'>About</WhiteLink>
      </NavbarNavItem>
    </NavbarNav>
  )
}

export default NavigationNavbar
