import React, { Component } from 'react';
import classnames from 'classnames';
import DropdownMenu from 'react-dd-menu';

export default class DropdownButton extends Component {
  constructor() {
    super();

    this.state = {
      isMenuOpen: false
    };
  }

  toggle = (e) => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
    e.stopPropagation();
  }

  close = () => {
    this.setState({ isMenuOpen: false });
  }

  render() {
    const btnClasses = classnames(
      'btn-hidden',
      'btn-hidden-sm',
      {'btn-hidden-active': this.state.isMenuOpen }
    );

    const menuOptions = {
      isOpen: this.state.isMenuOpen,
      close: this::this.close,
      toggle: <button type="button" className={btnClasses} onClick={this.toggle.bind(this)}><i className="material-icons">&#xE5D4;</i></button>,
      align: 'left'
    };

    return (
      <DropdownMenu {...menuOptions}>
        {this.props.children}
      </DropdownMenu>
    )
  }
}
