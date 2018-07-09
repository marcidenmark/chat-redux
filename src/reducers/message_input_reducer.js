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
