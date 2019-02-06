import React from 'react'
import PropTypes from 'prop-types'

import Modal from 'providers/Modal'
import { CrimsonButton } from 'components/Buttons'
import { DataCell, DataRow, DataTable } from 'components/DataTables'
import { CrimsonText, GrayText } from 'components/Typography'
import ArticleMenu from './ArticleMenu'

const ArticleList = ({ articles }) => (
  <DataTable>
    <DataRow disableHightlight>
      <DataCell width="25%">
        <CrimsonText weight={700} uppercase>Title</CrimsonText>
      </DataCell>
      <DataCell width="40%">
        <CrimsonText weight={700} uppercase>Description</CrimsonText>
      </DataCell>
      <DataCell width="20%">
        <CrimsonText weight={700} uppercase>Created at</CrimsonText>
      </DataCell>
      <DataCell width="15%">
        <Modal name="articleCreate">
          <CrimsonButton width="100%">Create</CrimsonButton>
        </Modal>
      </DataCell>
    </DataRow>
    { articles.map((article) => (
      <DataRow key={article._id}>
        <DataCell width="25%">
          <GrayText>{article.title}</GrayText>
        </DataCell>
        <DataCell width="40%">
          <GrayText>{article.description}</GrayText>
        </DataCell>
        <DataCell width="20%">
          <GrayText>{article.createdAt}</GrayText>
        </DataCell>
        <DataCell width="15%">
          <ArticleMenu id={article._id} isPublished={article.isPublished} />
        </DataCell>
      </DataRow>
    ))}
  </DataTable>
)

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
}

export default ArticleList



