import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import getConfig from 'next/config'

import { Navbar, NavbarBrand, NavbarHeader, NavbarMenu, NavbarNav, NavbarToggler, palette } from '@behelit/components'
import { DefaultLink } from 'components/Links'
import { GradientCrimsonSection } from 'components/Sections'
import ButtonBarItem from './ButtonBarItem'
import SearchBarItem from './SearchBarItem'
import StickyContainer from './StickyContainer'

const { publicRuntimeConfig: { PATHS_BASE } } = getConfig()

const Logo = styled.div`
  width: auto;
  height: 1.2rem;
  fill: #456312;
`

class Header extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { menuToggled: false, searchToggled: false }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
    this.handleToggleSearch = this.handleToggleSearch.bind(this)
    this.updateSearchReference = this.updateSearchReference.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleToggleSearch)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleToggleSearch)
  }

  handleToggleMenu() {
    const { menuToggled } = this.state
    this.setState({ menuToggled: !menuToggled })
  }

  handleToggleSearch(e) {
    // Toggle bar
    const search = ReactDOM.findDOMNode(this.search)
    if (search && search.contains(e.target) && !this.state.searchToggled) {
      return this.setState({ searchToggled: true })
    }
    if (search && !search.contains(e.target) && this.state.searchToggled) {
      return this.setState({ searchToggled: false })
    }
  }

  updateSearchReference(node) {
    this.search = node
  }

  render() {
    const { menuToggled, searchToggled } = this.state
    const { nature, sticky } = this.props

    return (
      <GradientCrimsonSection height="4.5rem" nature={nature}>
        <StickyContainer enabled={sticky}>
          <Navbar height="4.5rem">
            <NavbarHeader>
              <NavbarBrand>
                <DefaultLink href={PATHS_BASE}>
                  <Logo />
                </DefaultLink>
              </NavbarBrand>
            </NavbarHeader>
            <NavbarMenu toggled={menuToggled} width="calc(100% - 12rem)">
              <NavbarNav>
                <SearchBarItem
                  ref={this.updateSearchReference}
                  onToggle={this.handleToggleSearch}
                  toggled={searchToggled}
                />
              </NavbarNav>
              <NavbarNav toggled={!searchToggled} width="12rem">
                <ButtonBarItem />
              </NavbarNav>
            </NavbarMenu>
            <NavbarToggler
              onToggle={this.handleToggleMenu}
              toggled={menuToggled}
            />
          </Navbar>
        </StickyContainer>
      </GradientCrimsonSection>
    )
  }
}

Header.propTypes = {
  nature: PropTypes.oneOf(["blocks", "none"]),
  sticky: PropTypes.bool.isRequired,
}

Header.defaultProps = {
  nature: "blocks"
}

export default Header