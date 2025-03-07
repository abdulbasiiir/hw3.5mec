import { createStore } from 'redux';
import rootReducer from './reducers/reducers';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // для подключения Redux DevTools
);

export default store;