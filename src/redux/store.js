import { createStore } from 'redux';

// aca iportamos nuestro reducer
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;