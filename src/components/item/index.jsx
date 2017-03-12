import React, { Component } from 'react';
import HiddenButton from '../hidden_button';
import classnames from 'classnames';
import Icon from '../icon';

export default class Item extends Component {
  renderInfo() {
    if (this.props.starred) {
      return (
        <div className="item__info">
          <HiddenButton inactive theme={'golden'}>
            <i className="material-icons">star</i>
          </HiddenButton>
        </div>
      );
    }
    return null;
  }

  render() {
    const itemClasses = classnames(
      'item__box',
      {'item__completed' : this.props.completed}
    );

    return (
      <div className={itemClasses} onClick={this.props.onClick}>
        <div className="item__checkbox">
          <div className="item__checkbox-btn" onClick={(e) => {this.props.onToggleClick(this.props.id); e.stopPropagation(); }}>
            <Icon name="check" />
          </div>
        </div>
        <span className="item__caption">{this.props.title}</span>
        <div className="item__actions-box">
          <HiddenButton onClick={(e) => {this.props.onDeleteClick(this.props.id); e.stopPropagation()}}>
            <Icon name="delete" />
          </HiddenButton>
          <HiddenButton theme={this.props.starred ? 'golden' : false} onClick={(e) => {this.props.onStarClick(this.props.id); e.stopPropagation()}}>
            <Icon name="star" />
          </HiddenButton>
        </div>
        {this.renderInfo()}
      </div>
    )
  }
}

Item.defaultProps = {
  text: 'Item text',
  completed: false,
  starred: false,
  onClick: () => {},
}
