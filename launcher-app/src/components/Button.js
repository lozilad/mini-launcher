import classNames from "classnames";
import "./Button.css";

export function Button({ text, icon, outline, onTap }) {
	const classes = classNames({
		'button': true,
		'button--outline': outline
	});	
  return <button className={classes} onClick={onTap}>{icon} {text}</button>;
}
