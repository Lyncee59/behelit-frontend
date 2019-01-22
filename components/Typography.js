import React from 'react'
import styled from 'styled-components'

import { Text, palette } from '@behelit/components'

export const SectionTitle = styled(Text).attrs({ size: '1.2rem', uppercase: true, weight: 700 })``

export const ArticleTitle = styled(Text).attrs({ size: '1.2rem', uppercase: true, weight: 700 })`
  color: ${palette('crimson')};
`

export const ArticleDescription = styled(Text).attrs({ size: '1.2rem', weight: 400 })``
