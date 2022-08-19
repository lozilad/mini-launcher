/* eslint-disable no-undef */
import './Link.css';
import classNames from 'classnames';
export function Link({label, url, children, truncate, onTap}) {
	const classes = classNames({
		'link': true,
		'link--truncate': truncate
	});

	
  return (
	<a 
	onClick={event => {event.preventDefault(); !!onTap && onTap()}}
	className={classes} 
	href={url}>{ children ? children : (label || 'Untitled Link')}</a>
	);
}

export function LinkExternal({children, url}) {
	function openInBrowser(url) {
		console.log("opening", url);
		if (url) {
			AppPreloadedAPI.openExternal(url);
		}
	}
	return (
		<span onClick={() => openInBrowser(url)}>
			{children}
		</span>
	);
}