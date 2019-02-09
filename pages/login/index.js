import React from 'react'
import styled from 'styled-components'

import Layout from 'layouts/Public'
import LoginForm from 'features/login/LoginForm'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  & > * {
    width: 500px;
    height: 250px;
  }
`

const Login = () => (
  <Layout>
    <Wrapper>
      <LoginForm />
    </Wrapper>
  </Layout>
)

export default Login
