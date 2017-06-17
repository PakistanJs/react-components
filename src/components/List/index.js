import React, { Component, Children, cloneElement } from 'react'
import styles from './style.css'

class List extends Component {
	renderHeaders() {
		const headerItems = Children.map(this.props.children, (child) => {
			const { title, flex } = child.props

			return (
				<div
					className={styles.headerItem}
					style={{ flex }}
				>
					{title}
				</div>
			)
		})

		return (
			<div className={styles.headerItems}>
				{headerItems}
			</div>
		)
	}

	renderRow(renderValue, row) {
		if (typeof renderValue === 'string' || renderValue instanceof String) {
			return row[renderValue]
		}

		return renderValue ? renderValue(row) : null
	}

	renderRows() {
		const rows = this.props.rows.map(row => {
			const rowItems = Children.map(this.props.children, (child) => {
				const { children, flex } = child.props
				const columnCell = children

				return cloneElement(Children.only(columnCell), {
						children: this.renderRow(columnCell.props.renderValue, row),
						style: { flex }
					})
			})


			return (
				<div className={styles.rowItems}>
					{rowItems}
				</div>
			)
		})

		return (
			<div className={styles.rows}>
				{rows}
			</div>
		)
	}

	render() {
		return (
			<div className={styles.list}>
				{this.renderHeaders()}
				{this.renderRows()}
			</div>
		)
	}
}

List.Column = ({ children }) => (
	<div className={styles.column}>
		{children}
	</div>
)

List.ColumnCell = ({ children, ...rest }) => (
	<div className={styles.cell} {...rest} >
		{children}
	</div>
)


export default List
