import { createStore } from 'redux';
import reducer from './components/reducers/reducers';

const store = createStore(reducer);

export default store;