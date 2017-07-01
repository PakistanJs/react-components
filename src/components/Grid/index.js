import React, { Children, cloneElement } from 'react'
import cx from 'classnames'
import styles from './style.css'

const Grid = ({
	children,
	direction,
	alignItems,
	justifyContent,
	itemMargin
}) => (
	<div className={cx(styles.flex, {
		[styles[`direction_${direction}`]]: direction,
		[styles[`align_item_${alignItems}`]]: alignItems,
		[styles[`justify_content_${justifyContent}`]]: justifyContent
	})} >
		{Children.map(children, (child) => (
			<div style={{ margin: itemMargin }}>
				{child}
			</div>
		))}
	</div>
)

export default Grid
