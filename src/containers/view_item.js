import {connect} from 'react-redux';
import { toggleTodo, displayList } from '../actions';
import ViewItem from '../components/view_item';

const mapStateToProps = (state) => {
  const selected_item = state.app.get('items').find(d => d.get('id') == state.app.get('selected_item')).toJS();
  return {
    ...selected_item
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemove: () => { dispatch(displayList()); },
    onToggle: (id) => { dispatch(toggleTodo(id)); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewItem);
