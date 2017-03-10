import React from 'react';
import MenuButton from './menu_button';

const renderActions = (props) => {
  const actions = props.completed
    ? [
      { icon: 'flash_on', text: 'incomplete', onClick: () => { props.onToggle(props.id); } },
    ]
    : [
      { icon: 'flash_off', text: 'complete', onClick: () => { props.onToggle(props.id); }, theme: 'blue' },
      { icon: 'mode_edit', text: 'edit', onClick: props.onEdit, theme: 'blue' },
    ];

  return [
    { text: "change directory", onClick: props.onChangeDirectory },
    ...actions,
    { icon: 'delete', text: 'remove', onClick: props.onRemove, theme: 'red' }
  ].map((item, i) => <MenuButton {...item} key={i}/>);
}

const ViewItem = (props) => {
  console.log('view ', props);
  return (
    <div className="box list__box">
      <div className="list__head">
        <div className="list__title">{'item details'}</div>
        <div className="list__actions">
          hello
        </div>
      </div>
      <div className="list__items">
        <p className="label__title">title</p>
        <p className="label__text">{props.title}</p>
        <p className="label__title">description</p>
        <p className="label__text">{props.description}</p>
        <div className="list__actions">
          { renderActions(props) }
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default ViewItem;
