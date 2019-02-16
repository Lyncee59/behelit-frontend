import React from 'react'
import PropTypes from 'prop-types'

import { DataCell, DataRow, DataTable } from '@behelit/components'
import Modal from 'providers/Modal'
import { CrimsonButton } from 'components/Buttons'
import { CrimsonText, GrayText } from 'components/Typography'
import TagMenu from './TagMenu'

const TagList = ({ tags }) => (
  <DataTable>
    <DataRow disableHightlight>
      <DataCell width="70%">
        <CrimsonText uppercase weight={700}>Title</CrimsonText>
      </DataCell>
      <DataCell width="20%">
        <CrimsonText uppercase weight={700}>Created at</CrimsonText>
      </DataCell>
      <DataCell width="10%">
        <Modal name="tagCreate">
          <CrimsonButton width="100%">Create</CrimsonButton>
        </Modal>
      </DataCell>
    </DataRow>
    {tags.map((tag) => (
      <DataRow key={tag._id}>
        <DataCell width="70%">
          <GrayText>{tag.title}</GrayText>
        </DataCell>
        <DataCell width="20%">
          <GrayText>{tag.createdAt}</GrayText>
        </DataCell>
        <DataCell width="10%">
          <TagMenu id={tag._id} />
        </DataCell>
      </DataRow>
    ))}
  </DataTable>
)

TagList.propTypes = {
  tags: PropTypes.array.isRequired
}

export default TagList
