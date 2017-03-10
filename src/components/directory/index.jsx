import React, { Component } from 'react';
import classnames from 'classnames';
import DropdownButton from '../dropdown_button';

export default class Directory extends Component {
  renderActions() {
    if (this.props.showActions) {
      return (
        <div className="dir__actions">
          <DropdownButton>
            <li><button type="button" onClick={this.props.onEditClick}><i className="material-icons">mode_edit</i>{'edit'}</button></li>
            <li role="separator" className="separator" />
            <li><button type="button" onClick={this.props.onAddRootClick}><i className="material-icons">arrow_upward</i>{'Add root directory'}</button></li>
            <li><button type="button" onClick={this.props.onAddChildClick}><i className="material-icons">subdirectory_arrow_right</i>{'Add child directory'}</button></li>
          </DropdownButton>
        </div>
      )
    }
    return null;
  }

  renderInfo() {
    if (this.props.showInfo) {
      return (
        <div className="dir__info">
          <span>{this.props.items_count || 0}</span>
        </div>
      );
    }
    return null;
  }

  renderToggle() {
    let inner = () => {
      if (this.props.showToggle)
       return (<i className="fa fa-angle-right"></i>);
      return null;
    }

    return (
      <div className="dir__toggle-icon">
        {inner()}
      </div>
    )
  }

  render() {
    const boxClasses = classnames('dir__box', {'active' : this.props.active});
    return (
      <div className={boxClasses} onClick={this.props.onClick}>
        {this.renderToggle()}
        <div className="dir__name">
          {this.props.children}
        </div>
        {this.renderActions()}
        {this.renderInfo()}
      </div>
    )
  }
}

Directory.defaultProps = {
  showActions: true,
  showInfo: true,
  active: false,
  onEditClick: () => {},
  onAddRootClick: () => {},
  onAddChildClick: () => {},
};
