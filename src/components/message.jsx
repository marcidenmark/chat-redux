import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Message extends Component {
	render() {
		return (
			<div className="message-container">
				<div className="author">{this.props.author}dummy author
					<span className="created-at"> {this.props.time} dummy time </span>

				</div>

				<div className="content">{this.props.content} dummy content</div>


			</div>
		)
	}
}

export default Message
