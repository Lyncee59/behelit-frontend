import React from 'react'
import PropTypes from 'prop-types'

import { BrandName, Navbar, NavbarBrand, NavbarHeader, NavbarMenu, NavbarToggler } from '@behelit/components'
import { DefaultLink } from 'components/Links'
import { DarkGraySection } from 'components/Sections'
import StickyContainer from 'components/StickyContainer'
import MenuNavbar from './MenuNavbar'
import NavigationNavbar from './NavigationNavbar'

class Header extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = { menuToggled: false }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
  }

  handleToggleMenu () {
    const { menuToggled } = this.state
    this.setState({ menuToggled: !menuToggled })
  }

  render () {
    const { menuToggled } = this.state
    const { sticky } = this.props

    return (
      <DarkGraySection>
        <StickyContainer enabled={sticky}>
          <Navbar>
            <NavbarHeader>
              <NavbarBrand>
                <DefaultLink href="/">
                  <BrandName />
                </DefaultLink>
              </NavbarBrand>
            </NavbarHeader>
            <NavbarMenu toggled={menuToggled}>
              <NavigationNavbar />
              <MenuNavbar />
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
  sticky: PropTypes.bool.isRequired
}

export default Header
