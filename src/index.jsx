// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
// import '../assets/images';
//Marci, do to:
import messagesReducer from './reducers/messages_reducer';
//import each reducer from './reducers/reducer_name';
//import each reducer from './reducers/reducer_name';
//import each reducer from './reducers/reducer_name';
//import each reducer from './reducers/reducer_name';

// State and reducers
const reducers = combineReducers({
  // changeMe: (state = null, action) => state
  messages: messagesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// render an instance of the component in the DOM
// const root = document.getElementById('root');
// ReactDOM.render(
// 	<Provider store={createStore(reducers, {}, middlewares )}>
// 		<App />
// 	</Provider>,
// root);
