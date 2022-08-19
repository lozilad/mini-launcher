import './CardBasic.css';
import classNames from 'classnames';
export function CardBasic({children, layout, borderStyle}) {
	const classes = classNames({
		'window-no-drag': true, 
		'card': true,
		'card--center': layout === 'center'
	})
	return (
		<div className={classes} style={{borderStyle}}>
			{children}
		</div>
	);
}