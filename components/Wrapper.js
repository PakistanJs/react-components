import React, { Component, PropTypes } from 'react'

export default class Wrapper extends Component {
	static propTypes = {
		children: PropTypes.node
	}

	render() {
		return (
			<div style={{
				fontFamily: '"Raleway", sans-serif'
			}}>
				{this.props.children}
			</div>
		)
	}
}
