import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectedChannel, setMessages } from '../actions/index';

class ChannelList extends Component {
	// Component will mount
	render () {
		return (
			<div className="left-scene">
			<h4>Channels</h4>
			</div>
			)
	}
}
//more work here tktk
export default ChannelList
