import {
  DISPLAY_LIST,
  DISPLAY_ITEM,
  DISPLAY_ITEM_EDIT,
} from '../../actions';

import displayList from './displayItemsList';
import displayItem from './displayItem';
import displayItemEdit from './displayItemEdit';

export default {
  [DISPLAY_LIST]: (state) => {
    return displayList(state);
  },
  [DISPLAY_ITEM]: (state) => {
    return displayItem(state);
  },
  [DISPLAY_ITEM_EDIT]: (state) => {
    return displayItemEdit(state);
  }
};
