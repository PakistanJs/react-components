import React, { Component } from 'react'
import styles from './style.css'

class Modal extends Component {
	hide = () => {
		this.props.onClose()
	}

	preventClick = (e) => {
		e.preventDefault()
		e.stopPropagation()
	}

	render() {
		if (this.props.show) {
			return (
				<div
					className={styles.overlay}
					onClick={this.hide}
				>
					<div
						className={styles.modal}
						onClick={this.preventClick}
					>
						{this.props.children}
					</div>
				</div>
			)
		}

		return null
	}
}

Modal.Header = ({ children }) => (
	<div className={styles.header}>
		{children}
	</div>
)

Modal.Content = ({ children }) => (
	<div className={styles.content}>
		{children}
	</div>
)

Modal.Footer = ({ children }) => (
	<div className={styles.footer}>
		{children}
	</div>
)

export default Modal
