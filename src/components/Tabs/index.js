import React, { Component, Children, cloneElement } from 'react'
import cx from 'classnames'
import styles from './style.css'

class Tabs extends Component {
	constructor(props) {
		super(props)

		const firstChild = Children.only(this.props.children[0])

		this.state = {
			activeTab: firstChild.props.id
		}
	}

	handleTabClick = (e) => {
		const id = e.target.getAttribute('data-pkjs-id')

		this.setState({ activeTab: id })
	}

	renderTabs() {
		const tabs = Children.map(this.props.children, (child) => {
			const { label, id } = child.props

			return (
				<div
					className={cx(styles.tab, {
						[styles.tabActive]: this.state.activeTab === id
					})}
					data-pkjs-id={id}
					onClick={this.handleTabClick}
				>
					{label}
				</div>
			)
		})

		return (
			<div className={styles.tabs}>
				{tabs}
			</div>
		)
	}

	renderActivePanel() {
		let activePanel = null

		Children.forEach(this.props.children, (child) => {
			if (child.props.id === this.state.activeTab) {
				activePanel = child
			}
		})

		return activePanel
	}

	render() {
		return (
			<div className={styles.container}>
				{this.renderTabs()}
				{this.renderActivePanel()}
			</div>
		)
	}
}

Tabs.Panel = ({ children }) => (
	<div className={styles.tabPanel}>
		{children}
	</div>
)


export default Tabs
