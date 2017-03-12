import {connect} from 'react-redux';
import { toggleTodo, starTodo, selectAndDisplayTodo } from '../actions';
import Item from '../components/item';

function mapStateToProps(state, ownProps) {
  return { };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => { dispatch(selectAndDisplayTodo(ownProps.id)); },
    onToggleClick: () => { dispatch(toggleTodo(ownProps.id)); },
    onStarClick: () => { dispatch(starTodo(ownProps.id)); }
  };
}

const ItemContainer = connect(mapStateToProps, mapDispatchToProps)(Item);
export default ItemContainer;
