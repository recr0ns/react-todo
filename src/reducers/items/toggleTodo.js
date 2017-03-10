import { Map } from 'immutable';

export default function(state, id) {
  const items = state.get('items');
  const index = items.findIndex(i => i.get('id') == id );
  return state.update('items', (list) => list.update(index, (i) => i.set('completed', !i.get('completed'))));
}
