import React, { Component } from 'react';
import RoundButton from '../round_button';
import TitleButton from '../title_button';
import FontAwesome from 'react-fontawesome';

export default class List extends Component {
  renderItems() {
    if (this.props.items.length == 0){
      return (
        <div className="list__items-not-found">
          <p>{'Nothing to do!'}</p>
        </div>
      )
    }
    return this.props.items.map(item => this.props.renderItem(item))
  }

  renderActions() {
    if (this.props.showActions) {
      return (
        <div className="list__actions">
          <TitleButton text={'show completed'} active={this.props.showCompleted} onClick={this.props.onShowCompletedClick} />
        </div>
      )
    }
    return null;
  }

  renderAddButton() {
    if (this.props.showActions) {
      return (
        <RoundButton className="btn-green list__add-btn" onClick={this.props.onAddClick}>
          <i className="material-icons">add</i>
        </RoundButton>
      )
    }
    return null;
  }

  render() {
    return (
      <div className="box list__box">
        <div className="list__head">
          <div className="list__title">{this.props.title}</div>
          {this.renderActions()}
          {this.renderAddButton()}
        </div>
        <div className="list__items">
          {this.renderItems()}
        </div>
        <div>
        </div>
      </div>
    )
  }
}

List.defaultProps = {
  title: 'todo items',
  items: [],
  renderItem: () => {},
  onAddClick: () => { alert('add!'); }
};
