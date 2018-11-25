import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { injectIntl } from 'react-intl'
import { isEmpty } from 'ramda'

import { localizeUrl } from 'services/url'
import { FasSearch, FasTimesCircle, Input, NavbarNavItem } from '@behelit/components'

const Wrapper = styled(NavbarNavItem)`
  display: none;
  @media (min-width: 48rem) {
    display: flex;
    flex-grow: 1000;
    flex-basis: auto;
  }
`
const SearchContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 2.7rem;
`
const SearchInput = styled.input.attrs({ type: "text" })`
  display: ${(props) => (props.toggled ? 'block' : 'none')};
  width: 100%;
  height: 3.2rem;
  color: ${(props) => props.theme.palette['white']};
  font-family: ${(props) => props.theme['fontPrimary']};
  font-size: 1rem;
  font-weight: 500;
  background-color: ${(props) => props.theme.palette['transparent']};
  background-image: none;
  padding-left: 2.5rem;
  border: none;
  border-bottom-style: solid;
  border-bottom-width: 0.125rem;
  border-bottom-color: ${(props) => props.toggled ? props.theme.palette['white'] :  props.theme.palette['transparent']};
  outline-width: 0px;
  user-select: text;
  border-radius: 0.125rem;
  box-sizing: border-box;
  &::placeholder {
    color: ${(props) => props.theme.palette['whiteAlpha75']};
    font-family: ${(props) => props.theme['fontPrimary']};
    font-size: 1rem;
    font-weight: 500;
  }
`
const SearchIcon = styled(FasSearch).attrs({ size: '20px', selectable: true })`
  position: absolute;
  width: 20px;
  height: 20px; 
  top: 50%;
  left: 0.5rem;
  margin-top: -10px;
  fill: ${(props) => props.theme.palette['white']};
  &:hover {
    fill: ${(props) => props.theme.palette['white']};
  }
`
const ClearIcon = styled(FasTimesCircle).attrs({ size: '20px', selectable: true })`
  fill: ${(props) => props.theme.palette['white']};
`
const ClearButton = styled.div`
  position: absolute;
  top: 50%;
  margin-top: -10px;
  right: 0;
  display: ${(props) => props.toggled ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.palette['gray3']};
  cursor: pointer;
`

class SearchBarItem extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { value: '', clearToggled: false }
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleKeys = this.handleKeys.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeys, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeys, false);
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      window.location = localizeUrl(`/search?search=${this.state.value}`, this.props.intl.locale)
    }
  }

  handleKeys(e) {
    if (e.keyCode === 27) {
      this.handleClear()
    }
  }

  handleClear() {
    this.setState({ value: '' })
  }

  render() {
    const { onToggle, toggled } = this.props
    const { value } = this.state

    return (
      <Wrapper>
        <SearchContainer>
          <SearchIcon onClick={onToggle} />
          <SearchInput
            autoFocus
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            placeholder="Search for friends here..."
            toggled={toggled}
            value={value}
          />
          <ClearButton toggled={!isEmpty(value) && toggled} onClick={this.handleClear}>
            <ClearIcon />
          </ClearButton>
        </SearchContainer>
      </Wrapper>
    )
  }
}

SearchBarItem.propTypes = {
  toggled: PropTypes.bool.isRequired,
}

export default injectIntl(SearchBarItem)