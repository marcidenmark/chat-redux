import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class MessageInput extends Component {
	// handle event
	//
	render () {
		return (
			<input
				type="text"
				className="form-controle form-search"
				placeholder="Type Your Message here."

			/>)
	}
}

export default MessageInput;
