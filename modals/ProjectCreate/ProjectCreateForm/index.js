import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Form as ReactForm } from 'react-final-form'

import { createProject } from 'services/api/private'
import { ButtonGroup, Button } from '@behelit/components'
import { GrayButton } from 'components/Buttons'
import { Form } from 'components/Forms'
import { TabMenu, TabMenuItem } from 'components/TabMenus'
import ContentScreen from './ContentScreen'
import MetadataScreen from './MetadataScreen'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

class ProjectCreateForm extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = { screen: 'metadata' }
    this.onSubmit = this.onSubmit.bind(this)
    this.showMetadata = this.showMetadata.bind(this)
    this.showContent = this.showContent.bind(this)
  }

  async onSubmit (values) {
    const { onClose } = this.props
    createProject(values).then(() => {
      onClose()
      location.reload()
    })
  }

  showMetadata () {
    this.setState({ screen: 'metadata' })
  }

  showContent () {
    this.setState({ screen: 'content' })
  }

  render () {
    const { onClose, tags } = this.props
    const { screen } = this.state

    return (
      <Wrapper>
        <TabMenu>
          <TabMenuItem onClick={this.showMetadata} selected={screen === 'metadata'}>Metadata</TabMenuItem>
          <TabMenuItem onClick={this.showContent} selected={screen === 'content'}>Content</TabMenuItem>
        </TabMenu>
        <ReactForm
          onSubmit={this.onSubmit}
          render={({ handleSubmit, pristine, invalid, values }) => (
            <Form onSubmit={handleSubmit}>
              <MetadataScreen tags={tags} toggled={screen === 'metadata'} />
              <ContentScreen description={values.description} toggled={screen === 'content'} />
              <ButtonGroup>
                <GrayButton onClick={onClose}>Cancel</GrayButton>
                <Button type="submit" disabled={pristine || invalid}>Create</Button>
              </ButtonGroup>
            </Form>
            )}
        />
      </Wrapper>
    )
  }
}

ProjectCreateForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  tags: PropTypes.array.isRequired,
}

export default ProjectCreateForm
