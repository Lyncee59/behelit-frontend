import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getUsers } from 'services/api/private'
import { fetchData } from 'services/utils'
import Layout from 'layouts/Admin'
import UserList from 'features/admin/UserList'

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

const Users = ({ users }) => (
  <Layout>
    <UserList users={users} />
  </Layout>
)

Users.getInitialProps = (context) => {
  return fetchData(context, {
    users: getUsers()
  })
}

Users.propTypes = {
  users: PropTypes.array
}

export default Users
