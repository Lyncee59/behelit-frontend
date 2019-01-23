import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import PrismCode from './PrismCode'
import { DefaultLink } from '../Links'
import { List, ListItem } from '../Lists'
import { Separator } from '../Separators'
import { CrimsonText, GrayText } from '../Typography'

const codeRenderer = props => <PrismCode language={props.language} code={props.value} />

const inlineCodeRenderer = props => <PrismCode language={props.language} code={props.value} inline />

const headingRenderer = props => {
  switch (props.level) {
    case 1: return <CrimsonText as='h1' size='32px' weight={300} uppercase>{props.children}</CrimsonText>
    case 2: return <CrimsonText as='h2' size='24px' weight={300} uppercase underline>{props.children}</CrimsonText>
    case 3: return <GrayText as='h3' size='20.8px' weight={300}>{props.children}</GrayText>
    case 4: return <GrayText as='h4' size='16px' weight={300}>{props.children}</GrayText>
    case 5: return <GrayText as='h5' size='12.8px' weight={300}>{props.children}</GrayText>
    case 6: return <GrayText as='h6' size='11.2px' weight={300}>{props.children}</GrayText>
    default: return <span>{props.children.join(' ')}</span>
  }
}

const linkRenderer = props => <DefaultLink href={props.href} target='_blank'>{props.children}</DefaultLink>

const linkReferenceRenderer = props => <DefaultLink href={props.href} target='_blank'>{props.children}</DefaultLink>

const listReference = props => <List>{props.children}</List>

const listItemReference = props => <ListItem>{props.children}</ListItem>

const paragraphRenderer = props => <GrayText as='p'>{props.children}</GrayText>

const rootRenderer = props => props.children

const thematicBreakRenderer = props => <Separator />

const renderers = {
  'code': codeRenderer,
  'heading': headingRenderer,
  'inlineCode': inlineCodeRenderer,
  'link': linkRenderer,
  'linkReference': linkReferenceRenderer,
  'list': listReference,
  'listItem': listItemReference,
  'paragraph': paragraphRenderer,
  'root': rootRenderer,
  'thematicBreak': thematicBreakRenderer
}

const Markdown = props => <ReactMarkdown source={props.content} renderers={renderers} />

Markdown.propTypes = {
  content: PropTypes.string.isRequired
}

export default Markdown
