export default function(state.action) {
	if (state === undefined) {
		return null;
	}

	switch (action.type) {
		case 'CREATED_USER':
		return action.payload.user;
		default:
		return state:
	}
}

/// (case is the type in the action)
