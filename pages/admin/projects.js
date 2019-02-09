import React from 'react'
import PropTypes from 'prop-types'

import { getProjects } from 'services/api/private'
import { fetchData } from 'services/utils'
import Layout from 'layouts/Admin'
import ProjectList from 'features/admin/ProjectList'

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
