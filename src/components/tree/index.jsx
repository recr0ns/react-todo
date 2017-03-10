import React, { Component } from 'react';
import RoundButton from '../round_button';

export default class Tree extends Component {
  renderDirectories() {
    if (this.props.directories.length == 0) {
      return (
        <div className="tree__items-not-found">
          <p>{'no directories!'}</p>
          <p>{'create a new one!'}</p>
        </div>
      );
    }
    return this.props.directories.map(dir => this.props.renderDirectory(dir));
  }

  render() {
    return (
      <div className="box tree__box">
        <div className="tree__title">
          <span>directories</span>
          <RoundButton className="btn-green btn-sm tree__add-btn" onClick={this.props.onAddClick}>
            <i className="material-icons">add</i>
          </RoundButton>
        </div>
        <div className="tree__items">
          {this.renderDirectories()}
          <div className="tree__fixed-items">
            {this.props.fixedDirectories}
          </div>
        </div>
      </div>
    );
  }
}

Tree.defaultProps = {
  directories: [],
  renderDirectory: () => {},
  fixedDerectories: null,
};
