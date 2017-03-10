import React, { Component } from 'react';
import classnames from 'classnames';

export default class HiddenButton extends Component {
  render() {
    const theme = `btn-hidden-theme-${this.props.theme || 'default'}`;
    const btnClasses = classnames(
      'btn-hidden',
      {'btn-hidden-inactive': this.props.inactive},
      { [`btn-hidden-theme-${this.props.theme || 'default'}`] : this.props.theme || false},
      this.props.className
    );
    return (
      <div className={btnClasses} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
}

HiddenButton.defaultProps = {
  className: '',
  onClick: () => {},
}
