import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import app from './app';

export default combineReducers({
  routing,
  app,
  form,
});
