import {connect} from 'react-redux';
import { toggleTodo, displayList } from '../actions';
import EditItem from '../components/edit_item';

const mapStateToProps = (state) => {
  const default_item = { id: -1, title: '', description: '', starred: false, directory_id: state.app.get('selected_directory').get('id')};
  const selected_item = state.app.get('items').find(d => d.get('id') == state.app.get('selected_item'));
  const item = selected_item? selected_item.toJS() : default_item;
  return {
    title: selected_item? "edit item" : "new item",
    initialValues: item
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (state) => { console.log(state); },
    onCancelClick: () => { dispatch(displayList()); },
    onSaveClick: (id) => { dispatch(toggleTodo(id)); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);
