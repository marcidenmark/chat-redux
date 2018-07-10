export default function(state, action) {
	if (state === undefined) {
		return [];
	}

	switch (action.type) { case 'SET_MESSAGES':
		return action.payload.messages;
		default:
		return state;
	}
}
// started Monday july 9 after message_input.jsx
// not sure if this should be message_input_reducer or
// create message reducer.
// Tuesay July 10. Putting CREAT_MESSAGE reducer here instead of seprate file.

// export default function (state, action) {
// 	if (state=== undefined) {
// 		return null;
// 	}

// 	switch (action.type) { case 'CREATE_MESSAGE':
// 		return action.payload.message;
// 		default:
// 		return state;
// 	}
// }
