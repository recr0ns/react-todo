import React, { Component } from 'react'

export default class Layout extends Component {
  render () {
    return (
      <div className="outer">
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
