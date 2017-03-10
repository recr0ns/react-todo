import {connect} from 'react-redux';
import { addDirectory, filterTodo } from '../actions';
import Tree from '../components/tree';

function getDisplayingDirectories(app) {
  const directories = app.get('directories');
  const items = app.get('items');
  const result = directories.map(d => d.set('items_count', items.filter(i => !i.get('completed')).count(i => i.get('directory') == d.get('id')))).toJS();
  return result;
}

function mapStateToProps(state) {
  return {
    directories: getDisplayingDirectories(state.app),
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    onAddClick: () => { dispatch(addDirectory()); },
    onFixedClick: () => { dispatch(filterTodo(props.key)); },
  };
}

const TreeContainer = connect(mapStateToProps, mapDispatchToProps)(Tree);
export default TreeContainer;
