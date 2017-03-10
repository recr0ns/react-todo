import React, { Component } from 'react';

export default class RoundButton extends Component {
  render() {
    return (
      <button className={"round-btn " + this.props.className} onClick={this.props.onClick}>
        { this.props.children }
      </button>
    )
  }
}

RoundButton.defaultProps = {
  className: "",
  onClick: () => {}
};
