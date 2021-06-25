import {createStore} from 'redux'
import { applyMiddleware } from 'redux'
import rootReducer from '../reducers/root_reducer'
import {logger} from 'redux-logger'
import myThunk from '../middleware/thunk';

const configureStore = () => createStore(rootReducer, applyMiddleware(myThunk, logger));

export default configureStore