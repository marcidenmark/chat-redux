import React, { Component } from 'react';
import ChannelList from '../containers/channel_list';
import MessageList from '../containers/message_list';
import MessageInput from '../containers/message_input';
import Message from '../components/message';

// const App = () => {
//   return (
//     <div className="app">
//       <p>React + Redux starter</p>
//     </div>
//   );
// };

class App extends Component {
	render () {
		return (
			<div className="app">
				<h2> ChatApp </h2>
				<ChannelList />
			<div className="right-scene">
				<MessageList />
				<Message />
				<MessageInput />
			</div>
			</div>
			)
	}
}
export default App;
