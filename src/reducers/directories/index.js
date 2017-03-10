import {
  ADD_DIR,
  SELECT_DIR,
  RENAME_DIR,
  DELETE_DIR,
} from '../../actions';

import addDirectory from './addDirectory';
import selectDirectory from './selectDirectory';

export default {
  [ADD_DIR]: (state) => {
    return addDirectory(state);
  },

  [SELECT_DIR]: (state, action) => {
    return selectDirectory(state, action.payload);
  },

  [RENAME_DIR]: (state) => {
    return state;
  },

  [DELETE_DIR]: (state) => {
    return state;
  }
};
