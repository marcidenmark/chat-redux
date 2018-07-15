// import { CHANNEL_SELECTED  } from'../actions;

//       like this:?    (state = null, action)
export default function(state, action) {
	if (state === undefined) {
		return null;

		switch (action.type) {
			case 'CHANNEL_SELECTED': {
			return action.payload;
			}
			default: {
			return state;
		}
	}
}
