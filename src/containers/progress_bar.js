import {connect} from 'react-redux';
import ProgressBar from '../components/progress_bar';

function mapStateToProps(state, ownProps) {
  const items = state.app.get('items');
  const progress = items.count(i => i.get('completed'))*100.0/items.count();
  return {
    progress: progress.toFixed(4)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar);
