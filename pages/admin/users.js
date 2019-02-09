import React from 'react'
import PropTypes from 'prop-types'

import { getUsers } from 'services/api/private'
import { fetchData } from 'services/utils'
import Layout from 'layouts/Admin'
import UserList from 'features/admin/UserList'

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
