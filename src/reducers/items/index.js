import {
  ADD_TODO,
  SELECT_TODO,
  STAR_TODO,
  TOGGLE_TODO,
  SHOW_COMPLETED_TODO,
  FILTER_TODO,
} from '../../actions';

import addTodo from './addTodo';
import selectTodo from './selectTodo';
import starTodo from './starTodo';
import showCompletedTodo from './showCompletedTodo';
import toggleTodo from './toggleTodo';
import filterTodo from './filterTodo';

export default {
  [ADD_TODO]: (state) => {
    return addTodo(state);
  },

  [SELECT_TODO]: (state, action) => {
    return selectTodo(state, action.payload);
  },

  [TOGGLE_TODO]: (state, action) => {
    return toggleTodo(state, action.payload);
  },

  [SHOW_COMPLETED_TODO]: (state) => {
    return showCompletedTodo(state);
  },

  [STAR_TODO]: (state, action) => {
    return starTodo(state, action.payload);
  },

  [FILTER_TODO]: (state, action) => {
    return filterTodo(state, action.payload);
  }
}
