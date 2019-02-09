import React from 'react'
import PropTypes from 'prop-types'

import { fetchData } from 'services/utils'
import { getProjects } from 'services/api/public'
import Layout from 'layouts/Public'
import ProjectList from 'features/projects/ProjectList'

const Projects = ({ projects }) => (
  <Layout>
    <ProjectList projects={projects} />
  </Layout>
)

Projects.getInitialProps = (context) => fetchData(context, {
  projects: getProjects()
})

Projects.propTypes = {
  projects: PropTypes.array
}

export default Projects
