import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { BrandName, Navbar, NavbarBrand, NavbarHeader, NavbarMenu, NavbarToggler } from '@behelit/components'
import { DefaultLink, WhiteLink } from 'components/Links'
import { DarkGraySection } from 'components/Sections'
import StickyContainer from 'components/StickyContainer'
import AuthNavbar from './AuthNavbar'
import BreadcrumbNavbar from './BreadcrumbNavbar'

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
                <DefaultLink href='/'>
                  <BrandName />
                </DefaultLink>
              </NavbarBrand>
            </NavbarHeader>
            <NavbarMenu toggled={menuToggled}>
              <BreadcrumbNavbar />
              <AuthNavbar />
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
