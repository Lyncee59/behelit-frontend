import React from 'react'
import PropTypes from 'prop-types'

import { DataCell, DataRow, DataTable } from 'components/DataTables'
import { CrimsonText, GrayText } from 'components/Typography'
import CommentMenu from './CommentMenu'

const CommentList = ({ comments }) => (
  <DataTable>
    <DataRow disableHightlight>
      <DataCell width="25%">
        <CrimsonText uppercase weight={700}>Name</CrimsonText>
      </DataCell>
      <DataCell width="45%">
        <CrimsonText uppercase weight={700}>Message</CrimsonText>
      </DataCell>
      <DataCell width="20%">
        <CrimsonText uppercase weight={700}>Created at</CrimsonText>
      </DataCell>
      <DataCell width="10%" />
    </DataRow>
    {comments.map((comment) => (
      <DataRow key={comment._id}>
        <DataCell width="25%">
          <GrayText>{comment.name}</GrayText>
        </DataCell>
        <DataCell width="45%">
          <GrayText>{comment.message}</GrayText>
        </DataCell>
        <DataCell width="20%">
          <GrayText>{comment.createdAt}</GrayText>
        </DataCell>
        <DataCell width="10%">
          <CommentMenu id={comment._id} isPublished={comment.isPublished} />
        </DataCell>
      </DataRow>
    ))}
  </DataTable>
)

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentList
