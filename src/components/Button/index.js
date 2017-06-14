import React, { PropTypes } from 'react'
import classNames from 'classnames'
import styles from './style.css'

const Button = ({
	children,
	type,
	size,
	...rest
}) => (
	<a
		className={classNames(styles.button, {
			[styles[`type_${type}`]]: type,
			[styles[`type_${size}`]]: size
		})}
		{...rest}
	>
		{children}
	</a>
)

Button.propTypes = {
	children: PropTypes.node,
	type: PropTypes.oneOf(['primary', 'secondary']),
	size: PropTypes.oneOf(['small', 'medium'])
}

export default Button
