import React from 'react';
import Form from './forms/item';

export default (props) => {
  return (
    <div className="box list__box">
      <div className="list__head">
        <div className="list__title">{props.title}</div>
      </div>
      <div className="list__items">
        <Form {...props}/>
      </div>
      <div>
      </div>
    </div>
  );
}
