/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import { List, ListItem, Separator } from '@behelit/components'
import { DefaultLink } from 'components/Links'
import { PrismCode } from 'components/Prism'
import { CrimsonText, GrayText } from 'components/Typography'

const codeRenderer = props => <PrismCode code={props.value} language={props.language} />

const inlineCodeRenderer = props => <PrismCode code={props.value} inline language={props.language} />

const headingRenderer = props => {
  switch (props.level) {
    case 1: return <CrimsonText paragraph size="2rem" uppercase weight={400}>{props.children}</CrimsonText>
    case 2: return <CrimsonText paragraph size="1.5rem" underline uppercase weight={400}>{props.children}</CrimsonText>
    case 3: return <GrayText paragraph size="1.3rem" weight={400}>{props.children}</GrayText>
    case 4: return <GrayText paragraph size="1rem" weight={400}>{props.children}</GrayText>
    case 5: return <GrayText paragraph size="0.8rem" weight={400}>{props.children}</GrayText>
    case 6: return <GrayText paragraph size="0.7rem" weight={400}>{props.children}</GrayText>
    default: return <span>{props.children.join(' ')}</span>
  }
}

const linkRenderer = props => <DefaultLink href={props.href} target="_blank">{props.children}</DefaultLink>

const linkReferenceRenderer = props => <DefaultLink href={props.href} target="_blank">{props.children}</DefaultLink>

const listReference = props => <List>{props.children}</List>

const listItemReference = props => <ListItem>{props.children}</ListItem>

const paragraphRenderer = props => <GrayText paragraph>{props.children}</GrayText>

const rootRenderer = props => props.children

const thematicBreakRenderer = props => <Separator />

const textRenderer = props => <GrayText>{props.children}</GrayText>

const renderers = {
  code: codeRenderer,
  heading: headingRenderer,
  inlineCode: inlineCodeRenderer,
  link: linkRenderer,
  linkReference: linkReferenceRenderer,
  list: listReference,
  listItem: listItemReference,
  paragraph: paragraphRenderer,
  root: rootRenderer,
  thematicBreak: thematicBreakRenderer
  // 'text': textRenderer
}

const Markdown = props => <ReactMarkdown renderers={renderers} source={props.content} />

Markdown.propTypes = {
  content: PropTypes.string
}

Markdown.defaultProps = {
  content: ''
}

export default Markdown
/* eslint-enable */
