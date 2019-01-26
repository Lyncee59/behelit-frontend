import React from 'react'
import styled from 'styled-components'

import { palette } from '@behelit/components'
import { DefaultLink } from 'components/Links'
import { CrimsonText } from 'components/Typography'

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  & > * { 
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  @media(min-width: 992px) {
    flex-direction: row;
  }
`
const Container = styled(DefaultLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  background: ${palette('gray2')};
  border: 1px solid ${palette('gray2')};
  cursor: pointer;

  :hover {
    background: ${palette('gray1')};
  }

  @media(min-width: 48rem) {
    width: 250px;
  }
`

const CategoryList = () => (
  <Wrapper>
    <Container href="/admin/articles">
      <CrimsonText>
        Articles
      </CrimsonText>
    </Container>
    <Container>
      <CrimsonText>
        Comments
      </CrimsonText>
    </Container>
    <Container>
      <CrimsonText>
        Projects
      </CrimsonText>
    </Container>
    <Container>
      <CrimsonText>
        Reviews
      </CrimsonText>
    </Container>
    <Container>
      <CrimsonText>
        Tags
      </CrimsonText>
    </Container>
    <Container>
      <CrimsonText>
        Users
      </CrimsonText>
    </Container>
  </Wrapper>
)

export default CategoryList

     
     
