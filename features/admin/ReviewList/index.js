import React from 'react'
import PropTypes from 'prop-types'

import { DataCell, DataRow, DataTable } from 'components/DataTables'
import { CrimsonText, GrayText } from 'components/Typography'
import ReviewMenu from './ReviewMenu'

const ReviewList = ({ reviews }) => (
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
    {reviews.map((review) => (
      <DataRow key={review._id}>
        <DataCell width="25%">
          <GrayText>{review.name}</GrayText>
        </DataCell>
        <DataCell width="45%">
          <GrayText>{review.message}</GrayText>
        </DataCell>
        <DataCell width="20%">
          <GrayText>{review.createdAt}</GrayText>
        </DataCell>
        <DataCell width="10%">
          <ReviewMenu id={review._id} isPublished={review.isPublished} />
        </DataCell>
      </DataRow>
    ))}
  </DataTable>
)

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired
}

export default ReviewList
