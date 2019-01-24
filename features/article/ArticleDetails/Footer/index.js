import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { BrandLogo, palette } from '@behelit/components'
import { CrimsonText, GrayText } from 'components/Typography'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: ${palette('gray2')};
  border: 1px solid ${palette('gray2')};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(100% - 100px);
  padding: 15px;
  box-sizing: border-box;
`

const Footer = ({ article }) => (
    <Wrapper>
      <BrandLogo size="100px" />
      <Description>
        <CrimsonText size='20px' weight={300} color='brand-primary' capitalize>{article.author}</CrimsonText>
        <GrayText italic>
          I'm a full stack developer with over 9 years of experience working in .NET, HTML5, CSS3, Javascript (React & Node.js).
          I love programming, playing videogames and learning new things !
        </GrayText>
      </Description>
    </Wrapper>
  )

Footer.propTypes = {
  article: PropTypes.object
}

export default Footer
