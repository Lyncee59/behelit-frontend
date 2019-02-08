import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { DeleteIcon, EditIcon } from 'components/Icons'
import Modal from 'providers/Modal'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const TagMenu = ({ id }) => (
  <Wrapper>
    <Modal data={{ id }} name="tagEdit">
      <EditIcon selectable size="24px" />
    </Modal>
    <Modal data={{ id }} name="tagDelete">
      <DeleteIcon selectable size="24px" />
    </Modal>
  </Wrapper>
)

TagMenu.propTypes = {
  id: PropTypes.string.isRequired
}

export default TagMenu
