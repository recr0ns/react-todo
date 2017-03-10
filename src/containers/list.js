import {connect} from 'react-redux';
import { addTodo, showCompletedTodo } from '../actions';
import List from '../components/list';

const getSelectedDirectory = (state) => {
  return state.app.get('selected_directory');
}

function filterByType(state) {
  const selected_directory = getSelectedDirectory(state);
  const filter = state.app.get('filter_by');

  if (!selected_directory)
    return [];

  const items = state.app.get('items');

  const filter_by_type = (list) => {
    switch(selected_directory.get('id')) {
      case 'incompleted':
        return list.filter(i => !i.get('completed'));
      case 'completed':
        return list.filter(i => i.get('completed'));
      case 'starred':
        return list.filter(i => i.get('starred'));
      default:
        return list.filter(i => i.get('directory') == selected_directory.get('id'))
    };
  }

  const filter_by = (list) => {
    switch(selected_directory.get('id')) {
      case 'completed':
      case 'incompleted':
        return list;
      case 'starred':
        return list.filter(i => !i.get('completed'));
      default:
        return filter.get('show_completed')
          ? list
          : list.filter(i => !i.get('completed'));
    }
  }

  return filter_by(filter_by_type(items)).toJS();
}

function getTitle(state) {
  const selected_directory = getSelectedDirectory(state);
  return (selected_directory && selected_directory.get('name')) || 'No directory';
}

function isShowActions(state) {
  const selected_directory = getSelectedDirectory(state);
  return selected_directory && typeof selected_directory.get('id') !== 'string';
}

function mapStateToProps(state) {
  return {
    title: getTitle(state),
    items: filterByType(state),
    showActions: isShowActions(state),
    showCompleted: state.app.get('filter_by').get('show_completed'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddClick: () => { dispatch(addTodo()); },
    onShowCompletedClick: () => { dispatch(showCompletedTodo()); },
  };
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);
export default ListContainer;
