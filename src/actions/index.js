// TODO: add and export your own actions
import messages from '../messages';
//fake db. will change to fetch? later.
//
export function setMessages() {
	const promise = fetch('https://wagon-chat.herokuapp.com/general/messages')
	.then(response => response.json());
	return {
		type: 'SET_MESSAGES',
		payload: promise
	};
}

// export function xxxx() {
// 	return {
// 		type: 'CAPS_TYPE',
// 		payload: xxx
// 	};
// }

// sample of json from messages.js later through a fetch
// const messages =
	// [
	//   {
	//     "author":"anonymous92",
	//     "content":"Hello world!",
	//     "created_at":"2017-09-26T23:03:16.365Z"
	//   },
	//   {
	//     "author":"anonymous77",
	//     "content":"My name is anonymous77",
	//     "created_at":"2017-09-26T23:03:21.194Z"
	//   }
	// ]
