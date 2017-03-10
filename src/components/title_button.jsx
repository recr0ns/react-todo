import React from 'react';
import classnames from 'classnames';

const TitleButton = (props) => {
  const btnClasses = classnames(
    'btn-title',
    {'btn-title-active' : props.active }
  );

  return (
    <div className={btnClasses} onClick={props.onClick}>
      <span>{ props.text }</span>
    </div>
  )
}

export default TitleButton;
