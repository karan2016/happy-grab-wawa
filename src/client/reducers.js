import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import ApiReducer from 'api/reducer';

export default combineReducers({
  routing: routerReducer,
  api: ApiReducer
});
