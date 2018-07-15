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
//import selectedChannelReducer from './reducers/selectedChannelReducer'; each reducer from './reducers/reducer_name';

const idenityReducer = (state = null) => state;

const initialState = {
	messages: [],
	channels: ['General', 'React', 'Paris', 'Copenhagen', 'New York City'],
	currentUser:prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
	selectedChannel: 'general'
};

// State and reducers
const reducers = combineReducers({
	messages: messagesReducer,
	channels: idenityReducer, //???
	// channel: channelReducer,
});



//middlewares
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('app')
);
// render an instance of the component in the DOM
// const root = document.getElementById('root');
// ReactDOM.render(
// 	<Provider store={createStore(reducers, {}, middlewares )}>
// 		<App />
// 	</Provider>,
// root);
