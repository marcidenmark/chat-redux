import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class User extends Component {
	render() {
		return (
			<div className="UserWrapper">
				<div className="name">{this.props.user}user name
				</div>
			</div>
			)
	}
}

export default User
