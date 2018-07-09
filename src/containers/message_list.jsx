import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Message from '../components/message';
import { setMessages } from '../actions';

//monday afternoon july 9
import MessageInput from '../containers/message_input';
import { createMessage  } from '../actions';

class MessageList extends Component {
	componentWillMount() {
		this.props.setMessages();
	}
// (setMessages comes from action file)
	render () {
		return (
			<div className="channel-list">
				{this.props.messages.map((message, index) => {
					return <Message key={message.id} author={author} />
			})}
			</div>
			);
	}
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators(
	{ setMessages: setMessages },
	dispatch
	);
}

function mapStateToProps(reduxState) {
	return {
		messages: reduxState.messages
	};
}

export default connect(mapStateToProps, mapDispatchToProps) (MessageList);

// store an initialized empty array
//
//
//
//class FlatList extends Component {
//componentWillMount() {
// TODO: dispatch an action to load flats! }
// [...]
//}
