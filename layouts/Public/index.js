import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Head from 'next/head'

import { Container as BhContainer, palette } from '@behelit/components'
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

  @media(min-width: 48rem) {
    padding: 1rem 0;
  }
`

class Public extends React.PureComponent {
  constructor (props) {
    super(props)
    this.bodyRef = React.createRef()
    this.state = { scrollDirection: 'down', scrollTop: 0 }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    this.bodyRef.current.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  }

  componentWillUnmount () {
    this.bodyRef.current.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll () {
    const prevPosition = this.state.scrollTop
    const newPosition = this.bodyRef.current.scrollTop
    this.setState({
      scrollDirection: newPosition < prevPosition ? 'up' : 'down',
      scrollTop: newPosition
    })
  }

  render () {
    const { scrollDirection, scrollTop } = this.state
    const sticky = scrollTop > 100 && scrollDirection === 'up'

    return (
      <Wrapper ref={this.bodyRef}>
        <Head>
          <title>Behelit</title>
        </Head>
        <Header sticky={sticky} />
        <Container>
          {this.props.children}
        </Container>
      </Wrapper>
    )
  }
}

Public.propTypes = {
  children: PropTypes.node
}

export default Public
