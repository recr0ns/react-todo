import { Map } from 'immutable';

export default function(state, id) {
  if (typeof id == 'string') {
    return state.set('selected_directory', new Map({id : id, name: id}));
  }
  return state.set('selected_directory', state.get('directories').find(d => d.get('id') == id));
}
