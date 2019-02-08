import React from 'react'
import styled from 'styled-components'

import { List, ListItem, palette } from '@behelit/components'
import { CrimsonText } from 'components/Typography'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 1rem;
  margin-bottom: 0.5rem;
  box-sizing: border-box;
  background: ${palette('gray1')};
  border: 1px solid ${palette('gray2')};
  border-radius: 5px;
`
const Title = styled(CrimsonText)`
  width: 100%;
  margin-bottom: 15px;
  border-bottom: 1px solid ${palette('red10')};
`

const Workstation = () => (
  <Wrapper>
    <Title size="1.2rem" uppercase weight={700}>Workstation</Title>
    <List>
      <ListItem>Intel Core i7 6700K @4GHz</ListItem>
      <ListItem>Asus Z170 Pro Gaming</ListItem>
      <ListItem>Corsair Vengeance PC24000 3GHz 16GB DDR4 x2</ListItem>
      <ListItem>Corsair Hydro Series H60 2013</ListItem>
      <ListItem>MSI GeForce GTX 1060 3GB DDR5</ListItem>
      <ListItem>SanDisk Ultra II 480GB SATA III</ListItem>
      <ListItem>Evga Supernova 650 G3</ListItem>
      <ListItem>DELL P2417H 23.8 x4</ListItem>
      <ListItem>Roccat ISKU FX</ListItem>
      <ListItem>Roccat KONE XTD</ListItem>
    </List>
  </Wrapper>
)

export default Workstation
