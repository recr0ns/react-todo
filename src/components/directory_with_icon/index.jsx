import React, { Component } from 'react';
import Directory from '../directory';

export default class DirectoryWithIcon extends Component {
  render() {
    return (
      <Directory {...this.props} showActions={false} showInfo={false}>
        <div className="dir__name-with-icon">
          <span className="dir__name-icon">{this.props.icon}</span>
          <span className="dir__name-text">{this.props.text}</span>
        </div>
      </Directory>
    )
  }
}
