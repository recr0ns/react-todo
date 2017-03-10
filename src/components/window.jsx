import React from 'react';

export default ({ display, list, view_item, edit_item, edit_directory }) => {
  switch (display) {
    case 'list':
      return list;
    case 'view_item':
      return view_item;
    default:
      return null;
  }
}
