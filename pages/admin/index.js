import React from 'react'
import styled from 'styled-components'

import Layout from 'layouts/Public'
import { palette } from '@behelit/components'
import Menu from 'features/admin/Menu'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  @media(min-width: 992px) {
    flex-direction: row;
  }
`

const Admin = () => (
  <Layout>
    <Menu />
  </Layout>
)

export default Admin
