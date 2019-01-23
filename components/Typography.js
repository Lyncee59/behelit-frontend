import React from 'react'
import styled from 'styled-components'

import { Text, palette } from '@behelit/components'

export const CrimsonText = styled(Text)`
  color: ${palette('crimson')};
`
export const GrayText = Text

export const SectionTitle = styled(GrayText).attrs({ size: '1.2rem', uppercase: true, weight: 700 })``

export const ArticleTitle = styled(CrimsonText).attrs({ size: '1.2rem', uppercase: true, weight: 700 })``

export const ArticleDescription = styled(GrayText).attrs({ size: '1.2rem', weight: 400 })``

export const ProjectTitle = styled(CrimsonText).attrs({ size: '1.2rem', uppercase: true, weight: 700 })``

export const ProjectYear = styled(GrayText).attrs({ capitalize: true, size: '1.2rem', weight: 700 })``

export const ProjectSummary = styled(GrayText).attrs({ size: '1.2rem', weight: 400 })``

export const ProjectTag = styled(GrayText).attrs({ capitalize: true, size: '1.2rem', weight: 400 })`
  color: ${(props) => props.odd ? palette('black80') : palette('crimson')};
`
