import React from 'react'
import PropTypes from 'prop-types'

import Modal from 'providers/Modal'
import { CrimsonButton } from 'components/Buttons'
import { DataCell, DataRow, DataTable } from 'components/DataTables'
import { CrimsonText, GrayText } from 'components/Typography'
import UserMenu from './UserMenu'

const UserList = ({ users }) => (
  <DataTable>
    <DataRow disableHightlight>
      <DataCell width="25%">
        <CrimsonText uppercase weight={700}>Id</CrimsonText>
      </DataCell>
      <DataCell width="15%">
        <CrimsonText uppercase weight={700}>Username</CrimsonText>
      </DataCell>
      <DataCell width="30%">
        <CrimsonText uppercase weight={700}>Email</CrimsonText>
      </DataCell>
      <DataCell width="20%">
        <CrimsonText uppercase weight={700}>Created at</CrimsonText>
      </DataCell>
      <DataCell width="10%">
        <Modal name="userCreate">
          <CrimsonButton width="100%">Create</CrimsonButton>
        </Modal>
      </DataCell>
    </DataRow>
    {users.map((user) => (
      <DataRow key={user._id}>
        <DataCell width="25%">
          <GrayText>{user._id}</GrayText>
        </DataCell>
        <DataCell width="15%">
          <GrayText>{user.username}</GrayText>
        </DataCell>
        <DataCell width="30%">
          <GrayText>{user.email}</GrayText>
        </DataCell>
        <DataCell width="20%">
          <GrayText>{user.createdAt}</GrayText>
        </DataCell>
        <DataCell width="10%">
          <UserMenu id={user._id} />
        </DataCell>
      </DataRow>
    ))}
  </DataTable>
)

UserList.propTypes = {
  users: PropTypes.array.isRequired
}

export default UserList
