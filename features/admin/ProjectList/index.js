import React from 'react'
import PropTypes from 'prop-types'

import Modal from 'providers/Modal'
import { CrimsonButton } from 'components/Buttons'
import { DataCell, DataRow, DataTable } from 'components/DataTables'
import { CrimsonText, GrayText } from 'components/Typography'
import ProjectMenu from './ProjectMenu'

const ProjectList = ({ projects }) => (
  <DataTable>
    <DataRow disableHightlight>
      <DataCell width="25%">
        <CrimsonText weight={700} uppercase>Title</CrimsonText>
      </DataCell>
      <DataCell width="40%">
        <CrimsonText weight={700} uppercase>Summary</CrimsonText>
      </DataCell>
      <DataCell width="20%">
        <CrimsonText weight={700} uppercase>Created at</CrimsonText>
      </DataCell>
      <DataCell width="15%">
        <Modal name="projectCreate">
          <CrimsonButton width="100%">Create</CrimsonButton>
        </Modal>
      </DataCell>
    </DataRow>
    {projects.map((project) => (
      <DataRow key={project._id}>
        <DataCell width="25%">
          <GrayText>{project.title}</GrayText>
        </DataCell>
        <DataCell width="40%">
          <GrayText>{project.summary}</GrayText>
        </DataCell>
        <DataCell width="20%">
          <GrayText>{project.createdAt}</GrayText>
        </DataCell>
        <DataCell width="15%">
          <ProjectMenu id={project._id} isPublished={project.isPublished} />
        </DataCell>
      </DataRow>
    ))}
  </DataTable>
)

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
}

export default ProjectList



