import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select'
var _ = require('lodash');

export class DropDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hotelName: ''
    }
  }

  render() {
    const menuItem = _.get(this.props, 'data', []).map((d, index) => {
      return <MenuItem value={d} key={index} >{d}</MenuItem>
    })
    return (
      <div style={this.props.style}>
        <div>{this.props.label}</div>
        <Select onChange={this.props.onSelect} name={this.props.name} >
          {menuItem}
        </Select>
      </div>
    )
  }
}
