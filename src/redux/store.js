import {applyMiddleware, combineReducers, createStore} from 'redux';
import {signUpReducer} from './signUp/reducer';
import {signUpMiddleware} from './signUp/middlewares';
import {persistStore} from './signUp/middlewares/signUp.middleware';

const middlewares = [signUpMiddleware];

const rootReducer = combineReducers({
  signUp: signUpReducer,
});

const store = createStore(rootReducer, applyMiddleware(...middlewares));

persistStore(store);

export {store};
