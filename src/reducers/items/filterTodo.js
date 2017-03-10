import { Map } from 'immutable';

export default function(state, id) {
  return state.update('filter_by', (filter) => filter.set('id', id));
}
