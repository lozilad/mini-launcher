import "./GlobalWrapper.css";

export function GlobalWrapper({ children, title }) {
  return (
    <div className="global__wrapper">
      <div className="global__titlebar window-can-drag">
        <span className="global__titlebar-title">{title}</span>
      </div>
      <div className="global__main">{children}</div>
    </div>
  );
}
