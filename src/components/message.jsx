import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Message extends Component {
	render() {
		return (
			<div>
				<p>message to go here.</p>
			</div>
		)
	}
}

export default Message
