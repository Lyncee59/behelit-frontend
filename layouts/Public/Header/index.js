import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten } from 'polished'

import { config } from 'services/config'
import { getRouterPathname } from 'services/url'
import { BrandName, FabLinkedin, Navbar, NavbarBrand, NavbarHeader, NavbarMenu, NavbarNav, NavbarNavItem, NavbarToggler, palette } from '@behelit/components'
import { DefaultLink, WhiteLink } from 'components/Links'
import { DarkGraySection } from 'components/Sections'
import StickyContainer from './StickyContainer'

const LinkedInIcon = styled(FabLinkedin)`
  fill: ${palette('cerulean')};
  &:hover { fill: ${props => lighten(0.1, props.theme.palette['cerulean'])}; }
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
    const pathname = getRouterPathname()

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
                  <WhiteLink href='/' selected={pathname === '/landing'} size='1.2rem'>Blog</WhiteLink>
                </NavbarNavItem>
                 <NavbarNavItem>
                  <WhiteLink href='/projects' selected={pathname === '/projects'} size='1.2rem'>Projects</WhiteLink>
                </NavbarNavItem>
                 <NavbarNavItem>
                  <WhiteLink href='/reviews' selected={pathname === '/reviews'} size='1.2rem'>Reviews</WhiteLink>
                </NavbarNavItem>
                <NavbarNavItem>
                  <WhiteLink href='/contact' selected={pathname === '/contact'} size='1.2rem'>Contact</WhiteLink>
                </NavbarNavItem>
                <NavbarNavItem>
                  <WhiteLink href='/about' selected={pathname === '/about'} size='1.2rem'>About</WhiteLink>
                </NavbarNavItem>
              </NavbarNav>
              <NavbarNav width="6rem">
                <NavbarNavItem>
                  <LinkedInIcon selectable size="32px" />
                </NavbarNavItem>
              </NavbarNav>
            </NavbarMenu>
            <NavbarToggler
              onClick={this.handleToggleMenu}
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
