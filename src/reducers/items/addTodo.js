import { List, Map } from 'immutable';

let currentId = 1;
function nextId() {
  return currentId++;
}

export default function(state) {
  console.log('add todo!');
  const selected_directory = state.get('selected_directory');
  if (!selected_directory) {
    return state;
  }

  const id = nextId();
  const directory_id = selected_directory.get('id');
  const todo = new Map({
    id,
    title: `Todo title #${id}`,
    description: `Todo item description #${id}`,
    completed: false,
    directory: directory_id,
  });
  return state.update('items', list => list.push(todo));
}
