import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authReducer } from './auth/reducer';
import { megaUserReducer } from './megaUser/reducer';
import { ticketReducer } from './ticket/reducer';
import { userReducer } from './user/reducer';
import { wagonReducer } from './wagon/reducer';

const rootReducer = combineReducers({
  megaUsers: megaUserReducer,
  tickets: ticketReducer,
  users: userReducer,
  wagons: wagonReducer,
  auth: authReducer
});

const configureStore = () => {
  const enhancer = composeWithDevTools(applyMiddleware(thunk));
  return createStore(rootReducer, enhancer);
};

const store = configureStore();

export default store;
