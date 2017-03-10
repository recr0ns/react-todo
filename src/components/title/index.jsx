import React, { Component } from 'react';

export default class Title extends Component {
  renderContent() {
    if (this.props.content)
      return (
        <div className="title__bottom-content">
          {this.props.content}
        </div>
      );
    return null;
  }

  renderInlineContent() {
    if (this.props.filter)
      return (
        <div className="title__content">
          {this.props.filter}
        </div>
      );
    return null;
  }

  render() {
    return (
      <div className="box">
        <div className="title__box">
            <p className="title__caption">{this.props.title}</p>
            { this.renderInlineContent() }
        </div>
        { this.renderContent() }
      </div>
    )
  }
}

Title.defaultProps = {
  title: 'Title',
  filter: null,
  content: null
};
