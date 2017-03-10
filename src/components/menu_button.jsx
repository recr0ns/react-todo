import React from 'react';
import classnames from 'classnames';

const renderIcon = (iconName) => {
  return iconName
    ? <div className={"btn-menu__icon"}><i className="material-icons">{iconName}</i></div>
    : null;
}

export default (props) => {
  const btnClasses = classnames(
    'btn-menu',
    {[`btn-menu__theme-${props.theme}`] : props.theme },
  );
  return (
    <button className={btnClasses} onClick={props.onClick}>
      {renderIcon(props.icon)}
      <span>{props.text}</span>
    </button>
  )
};
