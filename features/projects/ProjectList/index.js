import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ProjectItem from './ProjectItem'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`

const ProjectList = ({ projects }) => (
  <Wrapper>
    {projects.map((project, index) => <ProjectItem key={project._id} project={project} />)}
  </Wrapper>
)

ProjectList.propTypes = {
  projects: PropTypes.array
}

ProjectList.defaultProps = {
  projects: []
}

export default ProjectList
