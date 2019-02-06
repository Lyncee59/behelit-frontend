import React from 'react'
import PropTypes from 'prop-types'

import Modal from 'providers/Modal'
import { CrimsonButton } from 'components/Buttons'
import { DataCell, DataRow, DataTable } from 'components/DataTables'
import { CrimsonText, GrayText } from 'components/Typography'
import ReviewMenu from './ReviewList'

const ReviewList = ({ reviews }) => (
  <DataTable>
    <DataRow disableHightlight>
      <DataCell width="25%">
        <CrimsonText weight={700} uppercase>Name</CrimsonText>
      </DataCell>
      <DataCell width="40%">
        <CrimsonText weight={700} uppercase>Message</CrimsonText>
      </DataCell>
      <DataCell width="20%">
        <CrimsonText weight={700} uppercase>Created at</CrimsonText>
      </DataCell>
      <DataCell width="15%">
        <Modal name="reviewCreate">
          <CrimsonButton width="100%">Create</CrimsonButton>
        </Modal>
      </DataCell>
    </DataRow>
    {reviews.map((review) => (
      <DataRow key={review._id}>
        <DataCell width="25%">
          <GrayText>{review.name}</GrayText>
        </DataCell>
        <DataCell width="40%">
          <GrayText>{review.message}</GrayText>
        </DataCell>
        <DataCell width="20%">
          <GrayText>{review.createdAt}</GrayText>
        </DataCell>
        <DataCell width="15%">
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



