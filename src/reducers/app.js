import { List, Map } from 'immutable';
import DirectoriesMap from './directories';
import TodoMap from './items';
import DisplayMap from './display';

const initialState = new Map({
  selected_directory: null,
  directories: new List(),
  items: new List(),
  selected_item: null,
  filter_by: new Map({ 'show_completed' : true }),
  display_block: 'none',
});

const actionsMap = {
  ...DirectoriesMap,
  ...TodoMap,
  ...DisplayMap
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
