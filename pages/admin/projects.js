import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getProjects } from 'services/api/private'
import { fetchData } from 'services/utils'
import Layout from 'layouts/Admin'
import ProjectList from 'features/admin/ProjectList'

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

const Projects = ({ projects }) => (
  <Layout>
    <ProjectList projects={projects} />
  </Layout>
)

Projects.getInitialProps = (context) => {
  return fetchData(context, {
    projects: getProjects()
  })
}

Projects.propTypes = {
  projects: PropTypes.array
}

export default Projects
