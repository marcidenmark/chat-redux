// started Monday july 9 after message_input.jsx
// not sure if this should be message_input_reducer or
// create message reducer.

export default function (state, action) {
	if (state=== undefined) {
		return null;
	}

	switch (action.type) { case 'CREATE_MESSAGE':
		return action.payload.message;
		default:
		return state;
	}
}
