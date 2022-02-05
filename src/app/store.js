import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import projectReducer from '../features/Project/reducer';

import thunk from 'redux-thunk';

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducers = combineReducers({
    projects: projectReducer
});

const store = createStore(rootReducers, composerEnhancer(applyMiddleware(thunk)));
export default store