import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ChannelList extends Component {
	// Component will mount
	render () {
		return (
			<div className="left-scene">
			<h4>The list of channels will go here.</h4>
			</div>
			)
	}
}

export default ChannelList