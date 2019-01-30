import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Form as ReactForm, Field } from 'react-final-form'

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

class CreateArticleForm extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = { screen: 'metadata' }
    this.showMetadata = this.showMetadata.bind(this)
    this.showContent = this.showContent.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.validate = this.validate.bind(this)
  }

  showMetadata () {
    this.setState({ screen: 'metadata' })
  }

  showContent () {
    this.setState({ screen: 'content' })
  }

  onSubmit () {
    console.log('onSubmit')
  }

  validate () {
    console.log('validate')
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
          validate={this.validate}
          render={({ handleSubmit, pristine, invalid, values, ...rest }) => (
            <Form onSubmit={handleSubmit}>
              {/* <span>{JSON.stringify({ invalid, ...rest })}</span> */}
              <MetadataScreen tags={tags} toggled={screen === 'metadata'} />
              <ContentScreen content={values.content} toggled={screen === 'content'} />
              <ButtonGroup>
                <GrayButton onClick={onClose}>Cancel</GrayButton>
                <Button disabled={pristine || invalid}>Create Article</Button>
              </ButtonGroup>
            </Form>
            )}
        />
      </Wrapper>
    )
  }
}

CreateArticleForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  tags: PropTypes.array.isRequired
}

export default CreateArticleForm
