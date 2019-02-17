import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Head from 'next/head'

import { Container as BhContainer, palette, screenSize } from '@behelit/components'
import Header from './Header'

const Wrapper = styled.div`
  height: 100%;
  min-height: 100%;
  overflow-y: auto;
  background: ${palette('gray1')};
  background-image: url('/static/img/fresh_snow.png');
`
const Container = styled(BhContainer)`
  padding: 1rem;
  box-sizing: border-box;

  @media(min-width: ${screenSize('sm')}) {
    padding: 1rem 0;
  }
`

class Admin extends React.PureComponent {
  constructor (props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = { scrollDirection: 'down', scrollTop: 0 }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll () {
    const prevPosition = this.state.scrollTop
    const newPosition = window.pageYOffset || document.documentElement.scrollTop
    this.setState({
      scrollDirection: newPosition < prevPosition ? 'up' : 'down',
      scrollTop: newPosition
    })
  }

  render () {
    const { scrollDirection, scrollTop } = this.state
    const sticky = scrollTop > 300 && scrollDirection === 'up'

    return (
      <React.Fragment>
        <Head>
          <title>Behelit - Administration</title>
        </Head>
        <Wrapper>
          <Header sticky={sticky} />
          <Container>
            {this.props.children}
          </Container>
        </Wrapper>
      </React.Fragment>
    )
  }
}

Admin.propTypes = {
  children: PropTypes.node
}

export default Admin
