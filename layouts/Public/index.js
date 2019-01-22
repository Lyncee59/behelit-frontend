import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { injectIntl } from 'react-intl'
import Head from 'next/head'

import Header from './Header'
// import Footer from './Footer'
import { Container as BhContainer, theme } from '@behelit/components'

const Wrapper = styled.div`
  height: 100%;
  background-color: ${theme('silver')};
  background-image: url('/static/img/fresh_snow.png');
`
const Container = styled(BhContainer)`
  padding: 0 1rem;
  box-sizing: border-box;
`

class Public extends React.PureComponent {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = { scrollDirection: 'down', scrollTop: 0 }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const prevPosition = this.state.scrollTop
    const newPosition = window.pageYOffset || document.documentElement.scrollTop
    this.setState({
      scrollDirection: newPosition < prevPosition ? 'up' : 'down',
      scrollTop: newPosition,
    })
  }

  render() {
    const sticky = this.state.scrollTop > 300 

    return (
      <React.Fragment>
        <Head>
          <title>Behelit</title>
        </Head>
        <Wrapper>
          <Header sticky={sticky} />
          <Container>
          {this.props.children}
          </Container>
          {/* <Footer /> */}
        </Wrapper>
      </React.Fragment>
    )
  }
}

Public.propTypes = {
  children: PropTypes.node,
}

export default injectIntl(Public)
