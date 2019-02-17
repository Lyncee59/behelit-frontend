import React from 'react'
import styled from 'styled-components'

import { screenSize } from '@behelit/components'
import Layout from 'layouts/Public'
import History from 'features/about/History'
import Software from 'features/about/Software'
import Website from 'features/about/Website'
import Workstation from 'features/about/Workstation'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  @media(min-width: ${screenSize('md')}) {
    flex-direction: row;
  }
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  & > :last-child:not(:first-child) {
    margin-bottom: 0.5rem;
  }

  @media(min-width: ${screenSize('md')}) {
    margin-left: ${(props) => props.position === 'left' ? '0' : '1rem'};
    margin-right: ${(props) => props.position === 'left' ? '1rem' : '0'};
    width: ${(props) => props.position === 'left' ? '55%' : '45%'};
  }
`

const About = () => (
  <Layout>
    <Wrapper>
      <Column position="left">
        <History />
      </Column>
      <Column>
        <Website />
        <Software />
        <Workstation />
      </Column>
    </Wrapper>
  </Layout>
)

export default About
