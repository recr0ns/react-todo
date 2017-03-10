import { List, Map } from 'immutable';

let currentId = 1;
function nextId() {
  return currentId++;
}

export default function(state) {
  console.log('add dir!');
  const id = nextId();
  const dir = new Map({
    id,
    name: `directory #${id}`,
    parent: null
  });
  return state.update('directories', list => list.push(dir));
}
