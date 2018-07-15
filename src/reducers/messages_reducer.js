// import { SET_MESSAGES, CREATED_MESSAGE, CHANNEL_SELECTED } from '../actions';

export default function(state = null, action) {
	if (state === null) {
		return [];
	}

	switch (action.type) { case 'SET_MESSAGES':
		return action.payload.messages;
		default:
		return state;
	}
}
