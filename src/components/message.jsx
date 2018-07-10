import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Message extends Component {
	render() {
		return (
			<div>
				<h6 className="bold">Author 1 Name
				<span className="lite"> time </span>
				</h6>
				<h6>Author's message text will be here.</h6>
				<h6 className="bold">Author 2 Name
				<span className="lite"> time </span>
				</h6>
				<h6>Author's message text will be here.</h6>

			</div>
		)
	}
}

export default Message
