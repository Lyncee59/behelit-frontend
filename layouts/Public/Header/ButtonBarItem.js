import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import getConfig from 'next/config'

import { Button, NavbarNavItem } from '@behelit/components'
import { DefaultLink } from 'components/Links'

const { publicRuntimeConfig: { PATHS_BASE } } = getConfig()

const Wrapper = styled(NavbarNavItem)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
  padding: 1rem 0;
  border-top: none;
  & > :first-child {
    margin-right: 1rem;
  }
`

const ButtonBarItem = ({ toggled }) => (
  <Wrapper toggled={toggled}>
    <DefaultLink href={`${PATHS_BASE}/login`}>
      <Button bounced>
        <FormattedMessage defaultMessage="Login" id="components.header.login" />
      </Button>
    </DefaultLink>
    <DefaultLink href={`${PATHS_BASE}/register`}>
      <Button bounced>
        <FormattedMessage defaultMessage="Register" id="components.header.register" />
      </Button>
    </DefaultLink>
  </Wrapper>
)

ButtonBarItem.propTypes = {
  toggled: PropTypes.bool,
}

ButtonBarItem.defaultProps = {
  toggled: true,
}

export default ButtonBarItem