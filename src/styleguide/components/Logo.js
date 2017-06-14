import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';

const styles = ({ font }) => ({
	logo: {
		display: 'flex',
		alignItems: 'center',
		margin: 0,
		fontFamily: font,
		fontSize: 14,
		color: '#666',
		fontWeight: 'normal',
	},
	image: {
		width: '3.5em',
		marginRight: '0.5em',
	},
});

export function LogoRenderer({ classes, children }) {
	return (
		<h1 className={classes.logo}>
			<img className={classes.image} src={require('./logo.jpg')} />
			{children}
		</h1>
	);
}

LogoRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node,
};

export default Styled(styles)(LogoRenderer);
