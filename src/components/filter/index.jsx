import React, { Component } from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Search from 'material-ui/svg-icons/action/search';

export default class Filter extends Component {
  render () {
    return (
      <div className="filter__box">
        <Menu disableAutoFocus={true}>
          <MenuItem leftIcon={<Search color='#000'/>} disabled={true}>
            <TextField hintText='Search'/>
          </MenuItem>
        </Menu>
      </div>
    )
  }
}
