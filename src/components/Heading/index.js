import React, { PropTypes } from 'react'
import classNames from 'classnames'
import styles from './style.css'

const Heading = ({ children, size, ...rest }) => (
	<div
		{...rest}
		className={
			classNames(styles.heading, {
				[styles[`size_${size}`]]: size
			})
		}
	>
		{children}
	</div>
)

Heading.propTypes = {
	children: PropTypes.node,
	size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
}

export default Heading
