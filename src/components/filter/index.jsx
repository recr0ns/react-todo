import React, { Component } from 'react';

export default class Filter extends Component {
  render () {
    return (
      <div className="filter__box">
        <input className="filter__search" placeholder="Serach..." />
      </div>
    )
  }
}
