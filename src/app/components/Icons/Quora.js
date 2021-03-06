import React from "react";
import PropTypes from "prop-types";

const Quora = (props) => {
	return (
		<svg
			className={props.iconStyles}
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			focusable="false"
			width="1em"
			height="1em"
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 24 24">
			<path d="M19.995 17.682s-.097 1.434-1.39 1.434c-1 0-1.682-.768-2.32-1.765c1.814-1.597 2.966-3.982 2.966-6.646c0-4.808-3.75-8.705-8.374-8.705c-4.625 0-8.374 3.897-8.374 8.705s3.749 8.705 8.374 8.705c.84 0 1.65-.129 2.414-.368c.967 1.55 2.195 2.943 4.117 2.943c3.912 0 4.074-4.303 4.074-4.303h-1.487zm-9.118.293c-2.696 0-4.882-3.255-4.882-7.27s2.186-7.27 4.882-7.27c2.696 0 4.882 3.255 4.882 7.27c0 1.597-.346 3.073-.932 4.272c-.662-.953-1.456-1.764-2.592-2.022c-2.015-.459-3.75.456-4.3.912l.517 1.076s.523-.303 1.82 0c.817.19 1.452 1.334 2.18 2.646a3.459 3.459 0 0 1-1.575.386z" />
		</svg>
	);
};

Quora.propTypes = {
	iconStyles: PropTypes.string.isRequired,
};

export default Quora;
