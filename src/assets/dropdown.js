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
      return <MenuItem value={d} key={index} class={this.props.class} >{d}</MenuItem>
    })
    const data = _.get(this.props, 'data', [])
    return (
      <div style={this.props.style} class={this.props.class}>
        <Select onChange={this.props.onChange} name={this.props.name} style={inputStyle} defaultValue={data[5]} >
          {menuItem}
        </Select>
      </div>
    )
  }
}
const inputStyle = {
  width: '100%',
  height: '100%',
  borderBottom: 'none',
  direction: 'rtl',
  textAlign: 'right'
}