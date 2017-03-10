import {connect} from 'react-redux';
import { selectAndFilter } from '../actions';
import Directory from '../components/directory';
import DirectoryWithIcon from '../components/directory_with_icon';

function mapStateToProps(state, ownProps) {
  const selected_directory = state.app.get('selected_directory');
  return {
    active: selected_directory && ownProps.id == selected_directory.get('id'),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => { dispatch(selectAndFilter(ownProps.id)); },
  };
}

const DirectoryContainer = connect(mapStateToProps, mapDispatchToProps)(Directory);
const DirectoryWithIconContainer = connect(mapStateToProps, mapDispatchToProps)(DirectoryWithIcon);

export {
   DirectoryContainer,
   DirectoryWithIconContainer
 };
