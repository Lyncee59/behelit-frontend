import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { FabLinkedin, FasEnvelope, NavbarNav, NavbarNavItem, palette } from '@behelit/components'
import { Contact } from 'modals'

const LinkedInIcon = styled(FabLinkedin)`
  fill: ${palette('cerulean')};
  &:hover { fill: ${props => darken(0.1, props.theme.palette['cerulean'])}; }
`
const MailIcon = styled(FasEnvelope)`
  fill: ${palette('gold')};
  &:hover { fill: ${props => darken(0.1, props.theme.palette['gold'])}; }
`

class ContactNavbar extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = { modalToggled: false }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle () {
    const { modalToggled } = this.state
    this.setState({ modalToggled: !modalToggled })
  }

  render () {
    const { modalToggled } = this.state

    return (
      <NavbarNav width="6rem">
        <NavbarNavItem>
          <LinkedInIcon selectable size="32px" />
        </NavbarNavItem>
        <NavbarNavItem>
          <MailIcon selectable size="32px" onClick={this.handleToggle} />
        </NavbarNavItem>
        <Contact toggled={modalToggled} handleClose={this.handleToggle} />
      </NavbarNav>
    )
  }
}
export default ContactNavbar
