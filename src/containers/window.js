import {connect} from 'react-redux';
import Window from '../components/window';

const mapStateToProps = (state) => {
  return {
    display: state.app.get('display_block') || 'none',
  };
};

export default connect(mapStateToProps)(Window);
