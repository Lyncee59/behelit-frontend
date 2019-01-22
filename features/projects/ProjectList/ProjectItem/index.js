import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FasArrowUp, FasArrowDown, Text, palette, theme } from '@behelit/components'
import { GrayCartridge } from 'components/Cartridges'
import { ExpandToggler } from 'components/Togglers'
import { ProjectSummary, ProjectTag, ProjectTitle, ProjectYear } from 'components/Typography'

// import { Color, Icon, Markdown, Text } from 'behelit-components'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  background-color: ${theme('xslightgray')};
  border: 1px solid ${palette('silver')};
`
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;

  @media(min-width: 992px) { 
    flex-direction: row;
    justify-content: flex-start;
  }
`
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 0.5rem 1rem;
  box-sizing: border-box;

  &  > * { margin-bottom: 10px; }

  @media(min-width: 992px) { width: 60%; }
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
`
const Tags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding: 0.5rem 1rem;
  box-sizing: border-box;

  & > * { padding: 5px; }
  
  @media(min-width: 992px) { width: 40%; }
`
const Toggler = styled(ExpandToggler)`
  position: absolute;
  bottom: -1rem;
  right: -1rem;
`

class ProjectItem extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = { toggled: false }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    const { toggled } = this.state
    this.setState({ toggled: !toggled })
  }

  render () {
    const { toggled } = this.state
    const { project } = this.props

    return (
    <Wrapper>
      <Container>
        <Description>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectYear weight={700} color='gray-6' capitalize>{`${project.company} - ${project.year}`}</ProjectYear>
          <ProjectSummary>{project.summary}</ProjectSummary>
        </Description>
        <Tags>
          { project.tags.map((tag, index) => <ProjectTag key={index} odd={index % 2 !== 0}>{tag}</ProjectTag>)}
        </Tags>
        <Toggler onClick={this.handleToggle} toggled={toggled} />
      </Container>
      { toggled &&
        <Container>
          <Details>
            {/* <Markdown content={project.description} /> */}
          </Details>
        </Container>
      }
    </Wrapper>

    )
  }
}

ProjectItem.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired
  }).isRequired

}

export default ProjectItem
