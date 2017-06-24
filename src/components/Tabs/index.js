import React, { Component, Children, cloneElement } from 'react'
import cx from 'classnames'
import styles from './style.css'

class Tabs extends Component {
	getActiveTabId = () => {
		let activeTab = this.props.activeTab;

		if (!activeTab && this.props.children) {
			const firstChild = Children.only(this.props.children[0]);
			activeTab = firstChild.props.id;
		}

		return activeTab;
	}

	handleTabClick = (e) => {
		const activeTab = e.target.getAttribute('data-pkjs-id')
		this.props.onTabChange(activeTab)
	}

	renderTabs() {
		const activeTab = this.getActiveTabId();

		const tabs = Children.map(this.props.children, (child) => {
			const { label, id } = child.props

			return (
				<div
					className={cx(styles.tab, {
						[styles.tabActive]: activeTab === id
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
		const activeTab = this.getActiveTabId();

		Children.forEach(this.props.children, (child) => {
			if (child.props.id === activeTab) {
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
