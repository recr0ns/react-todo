import { Map } from 'immutable';

export default function(state, id) {
  return state.update('filter_by', filter => filter.set('show_completed', !filter.get('show_completed')));
}
