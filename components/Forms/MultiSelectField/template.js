import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { palette } from '@behelit/components'

const Input = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
  min-height: 40px;
`
const Display = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  min-height: 40px;
  padding: 5px;
  box-sizing: border-box;
  background-color: ${palette('white')};
  border: 1px solid ${palette('gray2')};
`
const DisplayItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 30px;
  padding: 5px 10px;
  margin-right: 5px;
  margin-bottom: 2px;
  box-sizing: border-box;
  background-color: ${palette('white')};
  border: 1px solid ${palette('gray2')};
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: ${palette('gray5')};
  cursor: pointer;

  &:hover { background-color: ${palette('gray1')}; }
`
const List = styled.div`
  display: ${props => props.toggled ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 150px;
  border: 1px solid ${palette('gray2')};
  box-sizing: border-box;
  z-index: 100;
`
const Search = styled.input.attrs({ type: 'text' })`
  display: block;
  width: 100%;
  height: 40px;
  padding: 6px 12px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px dotted ${palette('gray3')}; 
  outline: none;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: ${palette('gray5')};

  &::-webkit-input-placeholder { color: ${palette('gray2')}; }
`
const Result = styled.div`
  width: 100%;
  max-height: 200px;
  background-color: ${palette('white')};
  overflow-y: auto;
`
const ResultItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 40px;  
  padding: 6px 12px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: ${palette('gray55')};
  cursor: pointer;

  &:hover { background-color: ${palette('gray1')}; }
`

const MultiSelectInput = props => {
  const { search, toggled, availableItems, selectedItems, ...rest } = props
  const { handleSearch, handleSelect, handleToggle, handleRemove } = rest

  return (
    <Input>
      <Display onClick={handleToggle}>
        {selectedItems.map((item, index) => <DisplayItem key={index} onClick={(e) => handleRemove(e, item.value)}>{item.text}</DisplayItem>)}
      </Display>
      <List toggled={toggled}>
        <Search value={search} onChange={handleSearch} />
        <Result>
          {availableItems.map((item, index) => <ResultItem key={index} onClick={() => handleSelect(item.value)}>{item.text}</ResultItem>)}
        </Result>
      </List>
    </Input>
  )
}

MultiSelectInput.propTypes = {
  search: PropTypes.string,
  toggled: PropTypes.bool.isRequired,
  availableItems: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired, PropTypes.object.isRequired])
  })).isRequired,
  selectedItems: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired, PropTypes.object.isRequired])
  })).isRequired
}


export default MultiSelectInput
