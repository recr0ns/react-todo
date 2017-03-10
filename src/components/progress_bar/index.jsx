import React, { Component } from 'react';

export default class ProgressBar extends Component {
  render() {
    return (
      <div className={`progress-bar ${this.props.className}`}>
        <div className="progress-bar__inner" style={{width: `${this.props.progress}%`}}></div>
      </div>
    );
  }
}

ProgressBar.defaultProps = {
  className: '',
  progress: 25,
};
