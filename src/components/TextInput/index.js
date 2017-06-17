import React from 'react'
import styles from './style.css'

const TextInput = ({ multiline, value, ...rest }) => {
	if (multiline) {
		return (
			<textarea className={styles.input} {...rest} >
				{value}
			</textarea>
		)
	}

	return <input className={styles.input} {...rest} value={value} />
}

TextInput.defaultProps = {
	rows: 5
}

export default TextInput
