import { createAction } from 'redux-actions';

export const ADD_DIR = 'ADD_DIRECTORY';
export const SELECT_DIR = 'SELECT_DIRECTORY';
export const DELETE_DIR = 'DELETE_DIRECTORY';
export const RENAME_DIR = 'RENAME_DIRECTORY';

export const ADD_TODO = 'ADD_TODO';
export const NEW_TODO = 'NEW_TODO';
export const SELECT_TODO = 'SELECT_TODO';
export const SHOW_COMPLETED_TODO = 'SHOW_COMPLETED_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const STAR_TODO = 'STAR_TODO';
export const FILTER_TODO = 'FILTER_TODO';
// export const TOGGLE_TODO = '';
// export const UPDATE_TODO = '';
// export const MOVE_TODO = '';

export const DISPLAY_LIST = 'DISPLAY_LIST';
export const DISPLAY_ITEM = 'DISPLAY_ITEM';
export const DISPLAY_ITEM_EDIT = 'DISPLAY_ITEM_EDIT';

export const addDirectory = createAction(ADD_DIR);
export const selectDirectory = createAction(SELECT_DIR);

export const selectAndFilter = (id) => {
  return (dispatch) => {
    dispatch(selectDirectory(id));
    dispatch(filterTodo(id));
    dispatch(displayList());
  }
};

export const newTodo = () => {
  return (dispatch) => {
    dispatch(selectTodo(-1));
    dispatch(displayItemEdit());
  }
}

export const selectAndDisplayTodo = (id) => {
  return (dispatch) => {
    dispatch(selectTodo(id));
    dispatch(displayItemEdit());
    // dispatch(displayItem());
  }
}

export const deleteDirectory = createAction(DELETE_DIR);
export const renameDirectory = createAction(RENAME_DIR);

export const addTodo = createAction(ADD_TODO);
export const selectTodo = createAction(SELECT_TODO);
export const toggleTodo = createAction(TOGGLE_TODO);
export const showCompletedTodo = createAction(SHOW_COMPLETED_TODO);
export const starTodo = createAction(STAR_TODO);
export const filterTodo = createAction(FILTER_TODO);

export const displayList = createAction(DISPLAY_LIST);
export const displayItem = createAction(DISPLAY_ITEM);
export const displayItemEdit = createAction(DISPLAY_ITEM_EDIT);
