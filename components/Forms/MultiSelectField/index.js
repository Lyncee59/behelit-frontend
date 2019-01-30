import React from 'react'
import PropTypes from 'prop-types'
import { append, contains, equals, filter, isEmpty, keysIn, toLower } from 'ramda'

import MultiSelectInput from './template.js'

class MultiSelectField extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: this.props.value,
      search: '',
      toggled: false
    }
    this.handleRemove = this.handleRemove.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle () {
    this.setState({ search: '', toggled: !this.state.toggled })
  }

  handleSearch (e) {
    this.setState({ search: e.target.value })
  }

  handleSelect (tagId) {
    const tags = append(tagId, this.state.value)
    this.setState({ toggled: false, value: tags })
    if (this.props.handleChange) { this.props.handleChange(tags) }
  }

  handleRemove (e, tagId) {
    e.stopPropagation()
    const tags = filter(x => !equals(x, tagId), this.state.value)
    this.setState({ value: tags })
    if (this.props.handleChange) { this.props.handleChange(tags) }
  }

  render () {
    const { search, toggled, value } = this.state
    const { borderColor } = this.props
    const selectedItems = filter(x => contains(x.value, value), this.props.items)
    const searchedItems = !isEmpty(search) ? filter(x => contains(toLower(search), toLower(x.text)), this.props.items) : this.props.items
    const availableItems = filter(x => !contains(x.value, value), searchedItems)

    return (
      <MultiSelectInput
        search={search}
        toggled={toggled}
        availableItems={availableItems}
        selectedItems={selectedItems}
        handleRemove={this.handleRemove}
        handleSearch={this.handleSearch}
        handleSelect={this.handleSelect}
        handleToggle={this.handleToggle}
      />
    )
  }
}

MultiSelectField.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired,
  value: PropTypes.array,
  handleChange: PropTypes.func
}

MultiSelectField.defaultProps = {
  items: [],
  value: []
}

export default MultiSelectField
