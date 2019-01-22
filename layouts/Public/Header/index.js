import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten } from 'polished'

import { config } from 'services/config'
import { BrandName, FabLinkedin, Navbar, NavbarBrand, NavbarHeader, NavbarMenu, NavbarNav, NavbarNavItem, NavbarToggler, palette } from '@behelit/components'
import { DefaultLink, HeaderLink } from 'components/Links'
import { DarkGraySection } from 'components/Sections'
import StickyContainer from './StickyContainer'

const LinkedInIcon = styled(FabLinkedin)`
  fill: ${palette('cerulean')};
  &:hover { fill: ${(props) => lighten(0.1, props.theme.palette['cerulean'])}; }
`

class Header extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { menuToggled: false }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
  }

  handleToggleMenu() {
    const { menuToggled } = this.state
    this.setState({ menuToggled: !menuToggled })
  }

  render() {
    const { menuToggled } = this.state
    const { nature, sticky } = this.props

    return (
      <DarkGraySection>
        <StickyContainer enabled={sticky}>
          <Navbar>
            <NavbarHeader>
              <NavbarBrand>
                <DefaultLink href={config.PATHS_BASE}>
                  <BrandName />
                </DefaultLink>
              </NavbarBrand>
            </NavbarHeader>
            <NavbarMenu toggled={menuToggled}>
              <NavbarNav width="35rem">
                <NavbarNavItem>
                  <HeaderLink href={`${config.PATHS_BASE}`}>Blog</HeaderLink>
                </NavbarNavItem>
                 <NavbarNavItem>
                  <HeaderLink href={`${config.PATHS_BASE}/projects`}>Projects</HeaderLink>
                </NavbarNavItem>
                 <NavbarNavItem>
                  <HeaderLink href={`${config.PATHS_BASE}/reviews`}>Reviews</HeaderLink>
                </NavbarNavItem>
                <NavbarNavItem>
                  <HeaderLink href={`${config.PATHS_BASE}/contact`}>Contact</HeaderLink>
                </NavbarNavItem>
                <NavbarNavItem>
                  <HeaderLink href={`${config.PATHS_BASE}/about`}>About</HeaderLink>
                </NavbarNavItem>
              </NavbarNav>
              <NavbarNav width="6rem">
                <NavbarNavItem>
                  <LinkedInIcon selectable size="32px" />
                </NavbarNavItem>
              </NavbarNav>
            </NavbarMenu>
            <NavbarToggler
              onToggle={this.handleToggleMenu}
              toggled={menuToggled}
            />
          </Navbar>
        </StickyContainer>
        </DarkGraySection>
    )
  }
}

Header.propTypes = {
  sticky: PropTypes.bool.isRequired,
}

export default Header
