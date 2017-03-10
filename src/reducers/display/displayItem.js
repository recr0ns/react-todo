import { Map } from 'immutable';

export default function(state) {
  return state.update('display_block', () => 'view_item');
}
