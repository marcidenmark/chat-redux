import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Message extends Component {
	render() {
		return (
			<div>
				<div className="author">Author 1 Name
				<span className="lite"> time </span>
				</div>
				<div className="author-message">Author's message text will be here.</div>


			</div>
		)
	}
}

export default Message
