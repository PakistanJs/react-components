import React, { Component } from 'react'
import styles from './style.css'

class Checkbox extends Component {
	handleOnChange = (e) => {
		this.props.onChange(e)
	}

	renderCheck() {
		return <path d="M27.604,6.751L14.176,20.18c-0.338,0.336-0.885,0.336-1.223,0l-0.27-0.27l0,0l-0.293-0.293l-1.268-1.268l-0.018-0.027L5.297,12.47c-0.336-0.336-0.336-0.885,0-1.221l1.83-1.828c0.338-0.339,0.883-0.339,1.221,0l5.223,5.262L24.551,3.7c0.338-0.337,0.885-0.337,1.221,0l1.832,1.832C27.939,5.867,27.939,6.415,27.604,6.751z"/>
	}

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.checkbox}>
					<input type="checkbox" onChange={this.handleOnChange} />
					<svg viewBox="0 0 27.855 27.855">
						<g>
							{this.props.checked ? this.renderCheck() : null}
							<path d="M21.795,22.613c0,0.973-0.793,1.766-1.768,1.766H3.535c-0.975,0-1.768-0.793-1.768-1.766V5.241c0-0.973,0.793-1.766,1.768-1.766h16.492c0.975,0,1.768,0.793,1.768,1.766l0,0l1.256-1.162c0.203-1.43-1.242-2.369-3.024-2.369H3.535C1.582,1.71,0,3.29,0,5.241v17.372c0,1.951,1.582,3.533,3.535,3.533h16.492c1.953,0,3.535-1.582,3.535-3.533V12.257l-1.768,1.924L21.795,22.613L21.795,22.613z"/>
						</g>
					</svg>
				</div>
				<label>{this.props.label}</label>
			</div>
		)
	}
}

export default Checkbox
