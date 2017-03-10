import {
  DISPLAY_LIST,
  DISPLAY_ITEM,
} from '../../actions';

import displayList from './displayItemsList';
import displayItem from './displayItem';

export default {
  [DISPLAY_LIST]: (state) => {
    return displayList(state);
  },
  [DISPLAY_ITEM]: (state) => {
    return displayItem(state);
  }
};
